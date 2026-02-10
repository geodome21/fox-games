#!/usr/bin/env python3
"""Development server with live-reload functionality.

Usage: python3 dev-server.py [port]

This server watches for file changes and automatically reloads the browser
when files are modified. Perfect for local development.
"""
import http.server
import socketserver
import sys
import os
import json
import time
import threading
from pathlib import Path
from http import HTTPStatus
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler

class FileChangeHandler(FileSystemEventHandler):
    """Watches for file changes and updates the modification timestamp."""
    def __init__(self, file_watcher):
        self.file_watcher = file_watcher
        
    def on_modified(self, event):
        if not event.is_directory:
            # Ignore node_modules and other irrelevant directories
            if 'node_modules' not in event.src_path and '.git' not in event.src_path:
                self.file_watcher.update_timestamp()
    
    def on_created(self, event):
        if not event.is_directory:
            if 'node_modules' not in event.src_path and '.git' not in event.src_path:
                self.file_watcher.update_timestamp()

class FileWatcher:
    """Tracks file modifications for live-reload."""
    def __init__(self, watch_dir):
        self.last_change = time.time()
        self.observer = Observer()
        self.observer.schedule(FileChangeHandler(self), watch_dir, recursive=True)
        self.observer.start()
    
    def update_timestamp(self):
        self.last_change = time.time()
    
    def stop(self):
        self.observer.stop()
        self.observer.join()

class LiveReloadHandler(http.server.SimpleHTTPRequestHandler):
    """HTTP handler with live-reload script injection."""
    
    file_watcher = None
    
    LIVE_RELOAD_SCRIPT = """
    <script>
    (function() {
        let lastCheck = Date.now();
        let reloading = false;
        
        function checkForChanges() {
            if (reloading) return;
            
            fetch('/__live_reload_check__?t=' + Date.now())
                .then(r => r.json())
                .then(data => {
                    if (data.changed && !reloading) {
                        reloading = true;
                        console.log('[Live Reload] Files changed, reloading...');
                        // Small delay to ensure file is fully written
                        setTimeout(() => location.reload(), 100);
                    }
                })
                .catch(e => console.log('[Live Reload] Check failed:', e.message));
        }
        
        // Check for changes every 500ms during development
        setInterval(checkForChanges, 500);
        console.log('[Live Reload] Connected');
    })();
    </script>
    """
    
    def do_GET(self):
        """Handle GET requests."""
        # Special endpoint for live-reload checks
        if self.path == '/__live_reload_check__':
            return self.handle_reload_check()
        
        # Regular file serving
        return super().do_GET()
    
    def handle_reload_check(self):
        """Return whether files have changed since last request."""
        client_time = float(self.args.get('t', [0])[0] or 0) / 1000.0
        changed = self.file_watcher.last_change > (client_time / 1000.0)
        
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.end_headers()
        self.wfile.write(json.dumps({
            'changed': changed,
            'timestamp': self.file_watcher.last_change * 1000
        }).encode())
    
    def end_headers(self):
        """Inject live-reload script into HTML pages."""
        path = self.translate_path(self.path)
        
        # Check if this is an HTML file
        is_html = (self.path.endswith('.html') or self.path.endswith('/')) and os.path.isfile(path)
        
        if is_html and self.command == 'GET':
            # Store content-length header to recalculate after injection
            self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        
        super().end_headers()
    
    def send_head(self):
        """Override to inject live-reload script into HTML responses."""
        path = self.translate_path(self.path)
        
        # Handle directory requests
        if os.path.isdir(path):
            index_path = os.path.join(path, 'index.html')
            if os.path.isfile(index_path):
                path = index_path
            else:
                return super().send_head()
        
        # Check if it's an HTML file
        if path.endswith('.html') or path.endswith('.htm'):
            try:
                with open(path, 'rb') as f:
                    content = f.read()
                
                # Inject live-reload script before closing body tag
                content_str = content.decode('utf-8', errors='ignore')
                
                if '</body>' in content_str:
                    content_str = content_str.replace('</body>', self.LIVE_RELOAD_SCRIPT + '</body>')
                else:
                    content_str += self.LIVE_RELOAD_SCRIPT
                
                content = content_str.encode('utf-8')
                
                self.send_response(HTTPStatus.OK)
                self.send_header('Content-Type', 'text/html; charset=utf-8')
                self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
                self.send_header('Content-Length', str(len(content)))
                self.end_headers()
                return __import__('io').BytesIO(content)
            except Exception as e:
                print(f"Error processing {path}: {e}")
        
        return super().send_head()

def main():
    """Start the development server with live-reload."""
    port = 8000
    if len(sys.argv) > 1:
        try:
            port = int(sys.argv[1])
        except ValueError:
            pass
    
    # Start file watcher
    LiveReloadHandler.file_watcher = FileWatcher('.')
    
    handler = LiveReloadHandler
    try:
        with socketserver.TCPServer(("", port), handler) as httpd:
            print(f"🚀 Development Server with Live Reload")
            print(f"📍 Serving on http://localhost:{port}/")
            print(f"👀 Watching for file changes...")
            print(f"Press Ctrl+C to stop\n")
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n\n🛑 Server stopped")
        LiveReloadHandler.file_watcher.stop()

if __name__ == '__main__':
    main()

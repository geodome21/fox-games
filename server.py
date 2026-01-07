#!/usr/bin/env python3
"""Simple local static file server.

Usage: python3 server.py [port]
"""
import http.server
import socketserver
import sys
import os
import io
import gzip
from http import HTTPStatus

class OptimizedHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    """SimpleHTTPRequestHandler subclass that adds Cache-Control headers and
    serves gzip-compressed responses for text-based files when supported by client.
    """
    server_version = "OptimizedHTTP/1.0"

    def send_response_only(self, code, message=None):
        super().send_response_only(code, message)

    def send_header(self, keyword, value):
        # Add Vary header when serving compressed responses
        if keyword.lower() == 'content-encoding':
            super().send_header('Vary', 'Accept-Encoding')
        super().send_header(keyword, value)

    def guess_cache_control(self, path):
        # Longer cache for static assets, short for HTML
        if path.endswith(('.html', '.htm')):
            return 'public, max-age=60'
        return 'public, max-age=31536000, immutable'

    def send_head(self):
        path = self.translate_path(self.path)
        if os.path.isdir(path):
            return super().send_head()

        ctype = self.guess_type(path)
        accepted_enc = self.headers.get('Accept-Encoding', '')
        try:
            with open(path, 'rb') as f:
                content = f.read()
        except OSError:
            return super().send_head()

        # Add cache-control
        cache_control = self.guess_cache_control(path)

        # If client accepts gzip and content is compressible, send compressed
        if 'gzip' in accepted_enc and ctype.startswith(('text/', 'application/javascript', 'application/json')):
            buf = io.BytesIO()
            with gzip.GzipFile(fileobj=buf, mode='wb') as gz:
                gz.write(content)
            compressed = buf.getvalue()
            self.send_response(HTTPStatus.OK)
            self.send_header('Content-type', ctype)
            self.send_header('Content-Encoding', 'gzip')
            self.send_header('Cache-Control', cache_control)
            self.send_header('Content-Length', str(len(compressed)))
            self.end_headers()
            return io.BytesIO(compressed)

        # Fallback: send uncompressed content with cache headers
        self.send_response(HTTPStatus.OK)
        self.send_header('Content-type', ctype)
        self.send_header('Cache-Control', cache_control)
        self.send_header('Content-Length', str(len(content)))
        self.end_headers()
        return io.BytesIO(content)


def main():
    port = 8000
    if len(sys.argv) > 1:
        try:
            port = int(sys.argv[1])
        except ValueError:
            pass

    handler = OptimizedHTTPRequestHandler
    with socketserver.TCPServer(("", port), handler) as httpd:
        print(f"Serving HTTP on 0.0.0.0 port {port} (http://localhost:{port}/) ...")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped by user")

if __name__ == '__main__':
    main()

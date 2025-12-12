#!/usr/bin/env python3
"""Simple local static file server.

Usage: python3 server.py [port]
"""
import http.server
import socketserver
import sys

def main():
    port = 8000
    if len(sys.argv) > 1:
        try:
            port = int(sys.argv[1])
        except ValueError:
            pass

    handler = http.server.SimpleHTTPRequestHandler
    with socketserver.TCPServer(("", port), handler) as httpd:
        print(f"Serving HTTP on 0.0.0.0 port {port} (http://localhost:{port}/) ...")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped by user")

if __name__ == '__main__':
    main()

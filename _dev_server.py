import http.server
import os

class Handler(http.server.SimpleHTTPRequestHandler):
    def send_error(self, code, message=None, explain=None):
        if code == 404:
            self.send_response(404)
            self.send_header('Content-Type', 'text/html')
            self.end_headers()
            with open(os.path.join(os.path.dirname(__file__), '404.html'), 'rb') as f:
                self.wfile.write(f.read())
            return
        super().send_error(code, message, explain)

http.server.test(HandlerClass=Handler, port=8765)

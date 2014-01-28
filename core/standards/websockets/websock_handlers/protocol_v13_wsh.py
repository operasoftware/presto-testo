#!/usr/bin/python

import sys, urllib, time
from mod_pywebsocket import common, msgutil, util
from base64 import b64encode, b64decode


# Imports that vary by python version
if sys.hexversion > 0x3000000:
    # python >= 3.0
    from io import StringIO
    from http.server import SimpleHTTPRequestHandler
    from urllib.parse import urlsplit
    b2s = lambda buf: buf.decode('latin_1')
    s2b = lambda s: s.encode('latin_1')
else:
    # python 2.X
    from cStringIO import StringIO
    from SimpleHTTPServer import SimpleHTTPRequestHandler
    from urlparse import urlsplit
    # No-ops
    b2s = lambda buf: buf
    s2b = lambda s: s

if sys.hexversion >= 0x2060000:
    # python >= 2.6
    from multiprocessing import Process
    from hashlib import md5, sha1
else:
    # python < 2.6
    Process = None
    from md5 import md5
    from sha import sha as sha1

def genkey(Key):
    GUID = "258EAFA5-E914-47DA-95CA-C5AB0DC85B11"
    accept = b64encode(sha1(s2b(Key + GUID)).digest())
    return accept


def web_socket_do_extra_handshake(request):
    request.connection.write('HTTP/1.1 101 Switching Protocols:\x0D\x0AConnection: Upgrade\x0D\x0AUpgrade: WebSocket\x0D\x0ASec-WebSocket-Protocol: '+request.headers_in.get('Sec-WebSocket-Protocol')+'\x0D\x0ASec-WebSocket-Origin: '+request.ws_origin+'\x0D\x0ASec-WebSocket-Accept: '+genkey(request.headers_in.get(common.SEC_WEBSOCKET_KEY_HEADER))+'\x0D\x0A\x0D\x0A')
    return

def web_socket_transfer_data(request):
    while True:
	request.ws_stream.send_message('test', binary=False)
	return

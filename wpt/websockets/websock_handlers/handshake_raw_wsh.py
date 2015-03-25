#!/usr/bin/python

from mod_pywebsocket import msgutil
import urllib


def web_socket_do_extra_handshake(request):
	request.connection.write(urllib.unquote(request.ws_resource.split('?', 1)[1]).decode("string-escape")+request.ws_resource+"\x0D\x0A\Sec-WebSocket-Accept :"+request.ws_accept"\x0D\x0A\x0D\x0A")

def web_socket_transfer_data(request):
	pass

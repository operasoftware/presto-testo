#!/usr/bin/python

from mod_pywebsocket import msgutil
import time

def web_socket_do_extra_handshake(request):
	str = "HTTP/1.1 101 WebSocket Protocol Handshake\x0D\x0AUpgrade: WebSocket\x0D\x0AConnection: Upgrade\x0D\x0ASec-WebSocket-Origin: "+request.ws_origin+"\x0D\x0ASec-WebSocket-Location: "+request.ws_location+"\x0D\x0ASec-WebSocket-Protocol: foobar\x0D\x0A\x0D\x0A"+request.ws_challenge_md5+"\xFF\x00"
	for c in str:
		msgutil._write(request, c)
		time.sleep(0.01)

def web_socket_transfer_data(request):
	pass

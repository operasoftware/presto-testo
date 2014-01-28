#!/usr/bin/python

from mod_pywebsocket import msgutil

def web_socket_do_extra_handshake(request):
	msgutil._write(request, "HTTP/1.1 101 WebSocket Protocol Handshake\x0D\x0AUpgrade: WebSocket\x0D\x0AConnection: Upgrade\x0D\x0ASec-WebSocket-Origin: "+request.ws_origin+"\x0D\x0ASec-WebSocket-Location: "+request.ws_location+"\x0D\x0ASec-WebSocket-Protocol: foobar\x0D\x0A\x0D\x0A"+request.ws_challenge_md5+"\xFF\x00")

def web_socket_transfer_data(request):
	pass

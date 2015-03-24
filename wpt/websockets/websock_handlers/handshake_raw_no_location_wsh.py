#!/usr/bin/python

from mod_pywebsocket import msgutil

def web_socket_do_extra_handshake(request):
	msgutil._write(request, urllib.unquote(request.ws_location.split('?', 1)[1]).decode("string-escape")+"\x0D\x0A\x0D\x0A"+request.ws_challenge_md5+"\xFF\x00")

def web_socket_transfer_data(request):
	pass

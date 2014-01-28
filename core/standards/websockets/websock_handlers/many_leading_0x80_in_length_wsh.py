#!/usr/bin/python

from mod_pywebsocket import msgutil

def web_socket_do_extra_handshake(request):
	pass  # Always accept.

def web_socket_transfer_data(request):
	msgutil._write(request, '\x80' + ('\x80' * 34999) + '\x03LOL\x00test\xFF')
	

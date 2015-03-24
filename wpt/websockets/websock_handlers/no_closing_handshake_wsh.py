#!/usr/bin/python

from mod_pywebsocket import msgutil

def web_socket_do_extra_handshake(request):
	pass  # Always accept.

def web_socket_transfer_data(request):
	request.server_terminated = True
	send_message(request, "") # will raise an exception	

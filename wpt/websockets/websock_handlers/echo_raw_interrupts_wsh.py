#!/usr/bin/python

from mod_pywebsocket import msgutil
import time

def web_socket_do_extra_handshake(request):
	pass  # Always accept.

def web_socket_transfer_data(request):
	while True:
		line = msgutil.receive_message(request)
		if line == 'exit':
			return
		str = line.decode("string-escape")
		for c in str:
			msgutil._write(request, c)
			time.sleep(0.1)

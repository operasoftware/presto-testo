#!/usr/bin/python

from mod_pywebsocket import msgutil
import time

def web_socket_do_extra_handshake(request):
	msgutil._write(request, 'x')
	time.sleep(2)
	msgutil._write(request, 'x')
	time.sleep(2)
	msgutil._write(request, 'x')
	time.sleep(2)
	msgutil._write(request, 'x')
	time.sleep(2)
	msgutil._write(request, 'x')
	time.sleep(2)

def web_socket_transfer_data(request):
	while True:
		line = msgutil.receive_message(request)
		if line == 'exit':
			return
		msgutil.send_message(request, line)

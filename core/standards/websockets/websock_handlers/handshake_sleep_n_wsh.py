#!/usr/bin/python

from mod_pywebsocket import msgutil
import time

def web_socket_do_extra_handshake(request):
	time.sleep(int(request.ws_location.split('?', 1)[1], 10))

def web_socket_transfer_data(request):
	pass

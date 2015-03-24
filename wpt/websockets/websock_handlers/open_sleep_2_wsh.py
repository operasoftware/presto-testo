#!/usr/bin/python

from mod_pywebsocket import msgutil
import time
import urllib


def web_socket_do_extra_handshake(request):
	pass

def web_socket_transfer_data(request):
	while True:
        time.sleep(2)
        msgutil.send_message(request, "test")
	time.sleep(1) #for some reason the server does an abortive close after this so we sleep for a second to make sure the client receives the data.


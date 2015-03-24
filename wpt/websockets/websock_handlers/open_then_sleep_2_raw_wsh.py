#!/usr/bin/python

from mod_pywebsocket import msgutil
import time
import urllib


def web_socket_do_extra_handshake(request):
	pass

def web_socket_transfer_data(request):
	time.sleep(2)
	msgutil._write(request, urllib.unquote(request.ws_location.split('?', 1)[1]).decode("string-escape"))
	time.sleep(1) #for some reason the server does an abortive close after this so we sleep for a second to make sure the client receives the data.

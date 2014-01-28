#!/usr/bin/python

from mod_pywebsocket import msgutil

import thread
import getopt
import os
import sys
import time
import re
import fcntl

_HEARTBEAT_ = 'Heartbeat'
_CONNECTING_ = 0
_OPEN_ = 1
_CLOSING_ = 2
_CLOSE_ = 2


_status_ = _CONNECTING_

class Response:

	last_mtime = None

	def __init__(self, filename, delay, sock):
		self.filename = filename
		self.delay = delay
		self.sock = sock

	def run(self):
		global _status_
		while True:
			if _status_ != _OPEN_:
				_status_ = _CLOSE_
				break
			time.sleep(self.delay)
			stat = os.stat(self.filename)
			
			if stat.st_mtime != self.last_mtime:
				self.last_mtime = stat.st_mtime
				self.read()

	def read(self):
		try:
			f = open(self.filename, 'r')
			c = f.readline().rstrip()
			f.close()

			if re.match(r'\d+', c):
				msgutil.send_message(self.sock, c)
		except Exception:
			if(f):
				f.close

class Counter:
	def __init__(self, file):
		self.file = file
		
	def increment(self):
		self.fop(1)

	def decrement(self):
		self.fop(-1)
	
	def fop(self, num):
		f = open(self.file, 'r+')
		fcntl.flock(f.fileno(), fcntl.LOCK_EX)
		c = f.readline().rstrip()
		
		i = None
		if re.match(r'\d+', c):
			i = int(c) + num
		else:
			i = 0
		
		if (i < 0):
			i = 0

		f.seek(0)
		f.write(str(i))
		fcntl.flock(f.fileno(), fcntl.LOCK_UN)
		f.close()


file = '/home/emoller/websock_handlers/count'


def web_socket_do_extra_handshake(request):
	pass  # Always accept.


def web_socket_transfer_data(request):
	global _status_
	_status_ = _OPEN_
	
	attr = ()
	thread.start_new_thread(Response(file, 0.5, request).run, attr)

	counter = Counter(file)
	counter.increment()
	
	while True:
		try:
			line = msgutil.receive_message(request)
		except Exception:
			_status_ = _CLOSING_
			counter.decrement()
			i = 0
			while _status_ == _CLOSING_:
				time.sleep(0.5)
				i += 1
				if (i > 10):
					break
			return


#!/usr/bin/python

from mod_pywebsocket import msgutil

def web_socket_do_extra_handshake(request):
	#	if request.ws_origin != 'http://simon.html5.org':
	#		raise Exception('wrong origin')
	pass

def web_socket_transfer_data(request):
	word = 'test'
	guessesLeft = 0
	while True:
		msg = msgutil.receive_message(request)
		tokens = msg.split(' ')
		pos = []
		if tokens[0] == 'NEW':
			guessesLeft = 14
			msgutil.send_message(request, 'NEW {}'.format(len(word)))
		elif tokens[0] == 'GUESS':
			if guessesLeft == 0:
				continue
			c = tokens[1]
			if word.find(c) != -1:
				for i in range(len(word)):
					if word[i] == c:
						pos.append(str(i))
				msgutil.send_message(request, 'GUESS {} {}'.format(c, ','.join(pos)))
			else:
				guessesLeft = guessesLeft - 1
				if guessesLeft == 0:
					msgutil.send_message(request, 'GUESS {} {} {}'.format(c, '-1', word)
				else:
					msgutil.send_message(request, 'GUESS {} {}'.format(c, '-1')

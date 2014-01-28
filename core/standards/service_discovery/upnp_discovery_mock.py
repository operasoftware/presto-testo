import BaseHTTPServer
import time
import sys
import SocketServer, os
import md5

try:
	import json
except:
	import simplejson as json


HOST_NAME = ''
PORT_NUMBER = 8000
SERVER_VERSION = '1.0.1'

SSDP_PORT = 1900
SSDP_MCAST_ADDR = '239.255.255.250'

savedDescription = {}
delay = {}
counter = {}
userAgentHash = {}

def keep_running():
	return True

class ThreadingHTTPServer(SocketServer.ThreadingMixIn,
SocketServer.TCPServer, BaseHTTPServer.HTTPServer):
	pass
class RedirectHandler(BaseHTTPServer.BaseHTTPRequestHandler):
	def do_GET(self):
		path = self.path[1:]
		try:
			path.index('get_description')
		except ValueError:
			try:
				path.index('get_counter')
			except ValueError:
				try:
					path.index('version')
				except ValueError:
					self.send_response(200)
					self.send_header('Content-Type','text/plain; charset="utf-8"')
					self.send_header('Content-Length',str(0))
					self.end_headers()
					print('no stuff given')
				else:
					self.send_response(200)
					self.send_header('Access-Control-Allow-Origin','*')
					self.send_header('Content-Length',str(len(SERVER_VERSION)))
					self.end_headers()
					self.wfile.write(SERVER_VERSION)
					self.wfile.close()
					print('version check: ',SERVER_VERSION)
			else:
				if(path[:path.index('?')] == 'get_counter'):
					id = int(path[path.index('?')+1:])
					try:
						self.send_response(200)
						self.send_header('Access-Control-Allow-Origin','*')
						DATA = str(counter[id])
						self.send_header('Content-Length',str(len(DATA)))
						self.end_headers()
						self.wfile.write(DATA)
						self.wfile.close()
					except KeyError:
						self.send_response(404)
						self.send_header('Access-Control-Allow-Origin','*')
						self.send_header('Content-Length',str(len('wrong id!')))
						self.end_headers()
						self.wfile.write('wrong id!')
						self.wfile.close()
		else:
			if(path[:path.index('?')] == 'get_description'):
				id = int(path[path.index('?')+1:])
				try:
					self.send_response(200)
					if(delay[id] > 0):
						time.sleep(delay[id])
						print('message delayed: ', delay[id])
					self.send_header('Access-Control-Allow-Origin','*')
					self.send_header('Content-Length',str(len(savedDescription[id])))
					self.end_headers()
					self.wfile.write(savedDescription[id])
					self.wfile.close()
					if(userAgentHash[id] == md5.md5(str(self.client_address[0]) + str(self.headers['user-agent'])).hexdigest()):
						global counter
						counter[id] = counter[id] + 1
					print('description given',id,counter[id])
				except KeyError:
					print('404: ',path)
					self.send_response(404)
					self.send_header('Access-Control-Allow-Origin','*')
					self.send_header('Content-Length',str(len('wrong id!')))
					self.end_headers()
					self.wfile.write('wrong id!')
					self.wfile.close()
			else:
				self.send_response(404)
				self.send_header('Content-Length',str(0))
				self.end_headers()
				print('no stuff given')

	def do_POST(self):
		self.send_response(200)
		self.send_header('Access-Control-Allow-Origin','*')
		self.end_headers()
		length = int(self.headers.getheader('Content-Length'))
		if(length > 0):
			res = self.rfile.read(length)
			try:
				params = json.loads(res)
			except ValueError, err:
				print 'ERROR:', err
				params = {}
		else:
			params = {}

		if(self.path == '/set_description'):
			try:
				params['description']
				params['id']
			except KeyError:
				print('description error - no proper param!')
				pass
			else:
				global savedDescription
				global counter
				global userAgentHash
				try:
					savedDescription[params['id']]
				except KeyError:
					counter[params['id']] = 0
				else:
					if(savedDescription[params['id']] != params['description']):
						counter[params['id']] = 0

				savedDescription[params['id']] = params['description']
				userAgentHash[params['id']] = md5.md5(str(self.client_address[0]) + str(self.headers['user-agent'])).hexdigest()

				try:
					params['delay']
				except KeyError:
					delay[params['id']] = 0
				else:
					delay[params['id']] = float(params['delay'])/1000.0
				pass

		elif(self.path == '/delete_description'):
			try:
				params['id']
			except KeyError:
				print('id error - no proper param!')
				pass
			else:
				global savedDescription
				del savedDescription[params['id']]
				print('saved_descrition cleared')
				pass

		elif(self.path == '/broadcast_msg'):
			if(not params['data']):
				self.wfile.write('error with params: no "data"!')
				self.wfile.close()
				print('broadcast_msg error - no proper param!')
				pass
			else:
				self.wfile.write('message sent')
				self.wfile.close()
				ssdp_multicast(params['data'], self.request.getsockname())
				pass

def ssdp_multicast(buf, interface_address):
	import socket
	s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
	print("IP_MULTICAST_IF: " + str(interface_address))
	s.setsockopt(socket.IPPROTO_IP, socket.IP_MULTICAST_IF, socket.inet_aton(interface_address[0]))
	s.sendto(buf, (SSDP_MCAST_ADDR, SSDP_PORT))

if __name__ == '__main__':
	server_class = ThreadingHTTPServer
	httpd = server_class((HOST_NAME, PORT_NUMBER), RedirectHandler)
	print time.asctime(), "Server Starts - %s:%s" % (HOST_NAME, PORT_NUMBER)

	import socket
	s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
	s.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, True)
	s.bind(('', SSDP_PORT))
	import struct
	mreqn = struct.pack(
		'4s4si',
		socket.inet_aton(SSDP_MCAST_ADDR),
		socket.inet_aton('0.0.0.0'),
		0)
	s.setsockopt(socket.IPPROTO_IP, socket.IP_ADD_MEMBERSHIP, mreqn)

	try:
		httpd.serve_forever()
	except KeyboardInterrupt:
		pass
	httpd.server_close()
	print time.asctime(), "Server Stops - %s:%s" % (HOST_NAME, PORT_NUMBER)
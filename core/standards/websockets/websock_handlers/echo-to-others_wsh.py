from mod_pywebsocket import msgutil

connections = {}

def web_socket_do_extra_handshake(request):
    pass

def web_socket_transfer_data(request):
    global connections
    connections[request] = True
    try:
        while True:
            msg = msgutil.receive_message(request)
            for ws in connections.keys():
                if ws != request:
                    msgutil.send_message(ws, msg)
    finally:
        # request is closed.
        del connections[request]

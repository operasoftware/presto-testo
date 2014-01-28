#!/bin/bash
# you need mod_pywebsocket in the python path for this to work
./mod_pywebsocket/standalone.py -p 8007 -w ./websock_handlers -d . --allow-draft75


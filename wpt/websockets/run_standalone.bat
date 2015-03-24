@echo off

set WS_PORT=8880
set WS_DOCUMENT_ROOT=%CD%\public_html\
set WS_HANDLER_DIR=%CD%\websock_handlers\

xcopy mod_pywebsocket C:\Python26\lib\site-packages\mod_pywebsocket /S /Q /Y

call python mod_pywebsocket\standalone.py -p %WS_PORT% -w %WS_HANDLER_DIR% -d %WS_DOCUMENT_ROOT%


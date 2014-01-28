#!/usr/local/bin/python

from httplib import HTTP
from sys import argv, exit
from os import tmpnam, execl, fork, wait, remove
from re import compile
import cgi

form = cgi.FieldStorage()

if not form.has_key("url"):
    print "Content-Type: text/html"
    print
    print "<html><body><form method='GET' action='inspector.py'>URL to inspect: <input name='url'></form></body></html>"
else:
    url_re = compile("http://(?P<host>[^/]*)(?P<path>/.*)?")
    match = url_re.match(form["url"].value)
    if not match:
        print "Content-Type: text/html"
        print
        print "<html><body>Malformed URL.</body></html>"
    else:
        host = match.group("host")
        path = match.group("path")
        http = HTTP(host)
        http.putrequest("GET", path)
        http.putheader("Host", host)
        http.endheaders()

        errcode, errmsg, headers = http.getreply()

        if errcode != 200:
            print "Content-Type: text/html"
            print
            print "<html><body>Failed to load URL: %d</body></html>" % errcode
        else:
            if headers.has_key("Content-Type"):
                print "Content-Type: " + headers["Content-Type"]
            else:
                print "Content-Type: text/plain"

            print
            
            file = http.getfile()
            whole_body_re = compile("(?P<before>.*)(?P<body>\\<[bB][oO][dD][yY]( [^>]*)?\\>)(?P<after>.*)")
            begin_body_re = compile("(?P<before>.*)(?P<body>\\<[bB][oO][dD][yY])(?P<after>.*)")
            end_body_re = compile("(?P<before>.*)(?P<body>\\>)(?P<after>.*)")

            whole_head_re = compile("(?P<before>.*)(?P<head>\\<[hH][eE][aA][dD]( [^>]*)?\\>)(?P<after>.*)")
            begin_head_re = compile("(?P<before>.*)(?P<head>\\<[hH][eE][aA][dD])(?P<after>.*)")
            end_head_re = compile("(?P<before>.*)(?P<head>\\>)(?P<after>.*)")
            
            base_href_re = compile("(http://([^/]*/)*)[^/]*")
            body_not_found = 1
            body_begin_found = 0
            head_not_found = 1
            head_begin_found = 0
            script = "<script id=\"inspector-script\" src=\"http://YOUR-HOST-HERE/PATH/inspector.js\"></script>"
            base = "<base href=\"" + base_href_re.match(form["url"].value).group(1) + "\">"
            while 1:
                line = file.readline()
                if head_not_found:
                    whole_match_head = whole_head_re.match(line)
                    begin_match_head = begin_head_re.match(line)
                    end_match_head = end_head_re.match(line)
                if body_not_found:
                    whole_match_body = whole_body_re.match(line)
                    begin_match_body = begin_body_re.match(line)
                    end_match_body = end_body_re.match(line)
                
                if not line:
                    break
                elif whole_match_head and head_not_found:
                    print whole_match_head.group("before") + whole_match_head.group("head") + base + whole_match_head.group("after")
                    head_not_found = 0
                elif begin_match_head and head_not_found and not head_begin_found:
                    print line
                    head_begin_found = 1
                elif head_begin_found and head_not_found and end_match_head:
                    print end_match_head.group("before") + end_match_head.group("head") + base + end_match_head.group("after")
                    head_not_found = 0
                elif whole_match_body and body_not_found:
                    html = script
                    if head_not_found:
                        html += base
                    print whole_match_body.group("before") + whole_match_body.group("body") + html + whole_match_body.group("after")
                    body_not_found = 0
                    head_not_found = 0
                elif begin_match_body and body_not_found and not body_begin_found:
                    print line
                    body_begin_found = 1
                elif body_begin_found and body_not_found and end_match_body:
                    html = script
                    if head_not_found:
                        html += base
                    print end_match_body.group("before") + end_match_body.group("body") + html + end_match_body.group("after")
                    body_not_found = 0
                    head_not_found = 0
                else:
                    print line

        
    

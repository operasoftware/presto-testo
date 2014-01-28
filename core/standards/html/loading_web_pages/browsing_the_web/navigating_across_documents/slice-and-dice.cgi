#!/usr/bin/python

# Written by jl
#from mod_python import apache
import os
import re
import cgi
import time
import urllib2
import cgitb
import sys
import urlparse

cgitb.enable()

def main():

    if True:
        arguments = cgi.FieldStorage()

        filename = arguments.getfirst("file")
        parts_argument = arguments.getfirst("parts")
        if not filename or not parts_argument:
            sys.stdout.write("Content-Type: text/html\r\n\r\n")
            sys.stdout.write("""<p>Script that allows a resource to trickle in
in a controlled fashion with customized delays and chunk lengths.

<p>Example:

<p>http://t/resources/scripts/slice-and-dice.cgi?file=images/2048x1360-photoexif.jpg&parts=3100,d5,3200,d5,29000,d3

<p>Returns the file in chunks.

<p>The file parameter is the path relative to this script

<p>The parts parameter is a comma-separated list of chunk lengths (NN, in
bytes) and delays (dNN in seconds,) mixed freely.  If the chunk
lengths don't add up to the length of the file, the last chunk length
and any delays that succeeded it are repeated until the whole file has
been sent. If the chunk lengths add up to more than the length of the
file, the first chunk that tries to send past the end of the file is
truncated, and the first chunk that can't send anything at all
finishes the request. (The example sends 3100 bytes, waits 5 seconds,
sends 3200 bytes, waits 5 seconds, and then repeats (send 29000 bytes,
wait 3 seconds) enough times to load the whole file.""")

            cgi.print_environ()

            return

        server_url = urlparse.urlunsplit(
            ("http", os.environ["HTTP_HOST"], os.environ["REQUEST_URI"], "", ""))
        url = urlparse.urljoin(server_url, filename)

        # Load the resource from http
        req = sys.stdout
        response = urllib2.urlopen(url)
        data = response.read()
        headers = response.info().headers
        headers.append("Expires: Tue, 03 Jul 2001 06:00:00 GMT\r\n")
        headers.append("Cache-Control: no-store, no-cache, must-revalidate, max-age=0\r\n")
        headers.append("Cache-Control: post-check=0, pre-check=0\r\n")
        headers.append("Pragma: no-cache\r\n")

        sys.stderr.writelines(headers)

        # Copy all the headers from the original resource
        req.writelines(headers)
        req.write("\r\n")
        req.flush()

        # Output the data as controlled by the parts argument
        parts = parts_argument.split(",")
        i = 0
        last_chunk = -1

        while data:
            while i < len(parts):
                if parts[i][0] == 'd':
                    time.sleep(int(parts[i][1:]))
                else:
                    if not data:
                        break
                    last_chunk = i
                    req.write(data[:int(parts[i])])
                    req.flush()
                    data = data[int(parts[i]):]
                i += 1

            if last_chunk == -1:
                # No chunk specifier, send the whole file now
                req.write(data)
                data = ""
            else:
                i = last_chunk

main()

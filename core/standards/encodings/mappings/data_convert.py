#!/usr/bin/python
# Parse the output of http://dump.testsuite.org/encoding/single-octet-test.html
from collections import defaultdict

def get_data():
    f = open("data.txt", "r")

    charcodes = defaultdict(list)
    expecteds = defaultdict(list)
    charsets = set()

    charset = None
    for line in f:
        if not line:
            continue
        if line[:2] == "  ":
            # We have a char entry
            charcode, failure, expected = line.split()
            charcode = eval("0x%s" % charcode)
            expected = "\u%s" % expected.lower()
            charcodes[charset].append(charcode)
            expecteds[charset].append(expected)
        else:
            if line.find("fail") < 1:
                continue
            charset = line.split()[0]
            charsets.add(charset)

    data = {}
    for charset in charsets:
        data[charset] = (charcodes[charset], expecteds[charset])

    return data

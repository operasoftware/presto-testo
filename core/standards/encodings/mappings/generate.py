#!/usr/bin/python
# CORE-43418 / T-609
# Arnt Richard Johansen <arntj@opera.com>
# This script was used to generate the test cases in this directory.

import data_convert

data = data_convert.get_data()

def contains_pua(expected_values):
    """Is any of the code points in the Private Use Area?"""
    for charstring in expected_values:
        c = ord(eval("u'" + charstring + "'"))
        if 0xf800 <= c <= 0xf8ff:
            return True
    return False

for charset, (char_values, expected_values) in data.items():
    # Don't generate test cases for mappings that include code points
    # in the Private Use Area. We are not going to support them.
    if contains_pua(expected_values):
        continue
    fn = "%s.html" % charset
    f = open(fn, "w")
    f.write("""<html>
 <head>
  <meta charset=""")
    f.write('"%s"' % charset)
    f.write(">")
    f.write("<title>Mappings for single-byte encodings: %s</title>" % charset)
    f.write("""<style type="text/css">p#test { display: none; }</style>
 </head>
 <body>
  <p id="test">""")
    f.write("".join([chr(c) for c in char_values]))
    f.write("""</p>
  <p>
   <script type="text/javascript">
    var passed = (document.getElementById('test').innerText == '""")
    f.write("".join(expected_values))
    f.write("""')
    if (passed)
     document.write('PASS')
    else
     document.write('FAIL')
   try{top.opener.rr(passed);}catch(e){}
   </script>
  </p>
 </body>
</html>""")
    f.close()

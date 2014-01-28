#!/usr/bin/python

pARs = ['none', 'xMidYMid meet', 'xMidYMid slice']
fits = ['fill', 'contain', 'cover', 'auto', 'none']

test_template = """<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>-o-object-fit:%s; pAR:%s</title>
<link rel="stylesheet" href="../../support/reftests.css"/>
<style>
 #test > * { -o-object-fit:%s; overflow:hidden; height:100px }
</style>
</head>
<body>
<div id="test">
 <svg xmlns="http://www.w3.org/2000/svg" width="220" height="220" preserveAspectRatio="%s">
  <polygon points="65,1 155,1 219,65 219,155 155,219 65,219 1,155 1,65" fill="#d9bb7a" stroke="black"/>
 </svg>
</div>
</body>
</html>
"""

ref_template = """<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>Reference for -o-object-fit:%s; pAR:%s</title>
<link rel="stylesheet" href="../../support/reftests.css"/>
<style>
 .helper { overflow:hidden; height:100px }
 .helper > * { %s; -o-object-fit:fill }
</style>
</head>
<body>
<div id="ref">
 <span class="helper"><img src="../../support/simple-shape.svg"/></span>
</div>
</body>
</html>
"""

reftest_list = ''
ref_hashes = {}
for pAR in pARs:
	xpAR = pAR
	if xpAR == 'xMidYMid meet':
		xpAR = 'meet'
	if xpAR == 'xMidYMid slice':
		xpAR = 'slice'
	for fit in fits:
		if fit == 'fill':
			refw = 200
			refh = 100
		elif fit == 'contain':
			refw = 100
			refh = 100
		elif fit == 'cover':
			refw = 200
			refh = 200
		else: # auto, none
			refw = 220
			refh = 220

		if fit == 'auto':
			refx = refy = 0;
		else:
			refx = 200/2 - refw/2
			refy = 100/2 - refh/2

		test_filename = "%s_%s.xhtml" % (xpAR, fit)
		test_file = open(test_filename, 'w')
		test_file.write(test_template % (fit, xpAR, fit, pAR))
		test_file.close()
		refstyle = 'left:%spx; top: %spx; width:%spx; height:%spx' % (refx, refy, refw, refh)
		if [v for k, v in ref_hashes.iteritems() if k == refstyle] == []:
			ref_filename = "%s_%s-ref.xhtml" % (xpAR, fit)
                        ref_hashes[refstyle] = ref_filename
                        ref_file = open(ref_filename, 'w')
                        ref_file.write(ref_template % (fit, xpAR, refstyle))
                        ref_file.close()
		else:
                        ref_filename = ref_hashes[refstyle]
		reftest_list += '== ' + test_filename + ' ' + ref_filename + '\n'
list_file = open('reftest.list', 'w')
list_file.write(reftest_list)
list_file.close()

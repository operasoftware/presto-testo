#!/usr/bin/python
# These tests may look a bit strange - all combinations compute to 'object-fit: auto' and
# 'object-position: 50% 50%'. Earlier preserveAspectRatio was supposed to influence these
# values, but that has now changed.

aligns = {
	'Min': '50%',
	'Mid': '50%',
	'Max': '50%',
}
meetOrSlice = {
	'meet': 'auto',
	'slice': 'auto',
}

templateSVG = """<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
	viewBox="0 0 500 500"
	xmlns="http://www.w3.org/2000/svg"
	width="220"
	height="220"
	preserveAspectRatio="{0} {1}"> </svg>
"""

templateHTML = """<!DOCTYPE html>
<html>
	<head>
		<title>getComputedStyle SVG preserveAspectratio='{0} {1}'</title>
		<script src="/resources/testharness.js"></script>
		<script src="/resources/testharnessreport.js"></script>
	</head>
	<body>
		<img id="test" src="{0}_{1}.svg">
		<script>
		test(function() {{
		  var e = document.getElementById('test');
		  assert_equals(getComputedStyle(e, '').OObjectFit, '{2}');
		  assert_equals(getComputedStyle(e, '').OObjectPosition, '{3} {4}');
		}});
		</script>
	</body>
</html>
"""

def testOut(align, mos, imageFit, imagePositionX, imagePositionY):
	file = open("%s_%s.svg" % (align, mos), 'w')
	file.write(templateSVG.format(align, mos))
	file.close()

	file = open("%s_%s.html" % (align, mos), 'w')
	file.write(templateHTML.format(align, mos, imageFit, imagePositionX, imagePositionY))
	file.close()

for xAlign, imagePositionX in aligns.iteritems():
	for yAlign, imagePositionY in aligns.iteritems():
		for mos, imageFit in meetOrSlice.iteritems():
			align = "x%sY%s" % (xAlign, yAlign)
			testOut(align, mos, imageFit, imagePositionX, imagePositionY)
# none
filename = "none.html"
testOut('none', '', 'auto', '50%', '50%')

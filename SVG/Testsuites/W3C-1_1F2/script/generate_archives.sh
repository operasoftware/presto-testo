#!/bin/sh
#
# This script generates the test suite archives
#
# $Revision: 1.4 $
#

# ideally this env variable should be set by the makefile
if [ $# -ne 1 ]; then
  echo "Missing argument to script, nothing will be done."
  echo "\nUsage: generate_archives.sh listofteststopublish.txt\n"
  exit 1
fi

PUBLISHED_TEST_FILES=$1

cd ..

FULL_ARCHIVE=archives/W3C_SVG_11_TestSuite.tar

# resources directory
echo "Archiving resources directory ..."
RESOURCES=`find resources -type d -name CVS -prune -o -type f -print`
chmod a+r ${RESOURCES}
tar uf ${FULL_ARCHIVE} ${RESOURCES}

# htmlEmbed harness directory
echo "Archiving htmlEmbed harness directory ..."
chmod a+r harness/htmlEmbed/*.html
tar uf ${FULL_ARCHIVE} harness/htmlEmbed/*.html 

# htmlObject harness directory
echo "Archiving htmlObject harness directory ..."
chmod a+r harness/htmlObject/*.html
tar uf ${FULL_ARCHIVE} harness/htmlObject/*.html

# htmlObject harness directory
echo "Archiving htmlObjectApproved harness directory ..."
chmod a+r harness/htmlObjectApproved/*.html
tar uf ${FULL_ARCHIVE} harness/htmlObjectApproved/*.html

# htmlObjectMini harness directory
echo "Archiving htmlObjectMini harness directory ..."
chmod a+r harness/htmlObjectMini/*.html
tar uf ${FULL_ARCHIVE} harness/htmlObjectMini/*.html

# htmlObjectMiniApproved harness directory
echo "Archiving htmlObjectMini harness directory ..."
chmod a+r harness/htmlObjectMiniApproved/*.html
tar uf ${FULL_ARCHIVE} harness/htmlObjectMiniApproved/*.html

# htmlSVGWeb harness directory
echo "Archiving htmlSVGWeb_local harness directory ..."
chmod a+r harness/htmlSVGWeb/*.html
tar uf ${FULL_ARCHIVE} harness/htmlSVGWeb/*.html

# htmlSVGWeb_local harness directory
echo "Archiving htmlSVGWeb_local harness directory ..."
chmod a+r harness/htmlSVGWeb_local/*.html
tar uf ${FULL_ARCHIVE} harness/htmlSVGWeb_local/*.html

# images directory
echo "Archiving images directory ..."
FILES=`find images -type d -name CVS -prune -o -type f -print`
chmod a+r ${FILES}
tar uf ${FULL_ARCHIVE} ${FILES}

# png directory
echo "Archiving png directory ..."
chmod a+r png/*.png
tar uf ${FULL_ARCHIVE} png/*.png

# status directory
#echo "Archiving status templates ..."
#tar uf ${FULL_ARCHIVE} status/full-query.xml status/basic-query.xml status/tiny-query.xml

# svg directory
echo "Archiving svg directory  ..."
chmod a+r `cat script/$PUBLISHED_TEST_FILES  | sed 's%^%svg/%'`
tar uf ${FULL_ARCHIVE} `cat script/$PUBLISHED_TEST_FILES  | sed 's%^%svg/%'`

# SVG harness directory
echo "Archiving svg harness directory  ..."
chmod a+r harness/svg/*.svg
tar uf ${FULL_ARCHIVE} harness/svg/*.svg

# svgweb directory
echo "Archiving svgweb directory  ..."
chmod a+r svgweb/*
tar uf ${FULL_ARCHIVE} svgweb/*.*
tar uf ${FULL_ARCHIVE} svgweb/tools/*.*
tar uf ${FULL_ARCHIVE} svgweb/tools/lib/*.*

chmod a+r harness/index.html
tar uf ${FULL_ARCHIVE} harness/index.html

gzip ${FULL_ARCHIVE}

exit 0

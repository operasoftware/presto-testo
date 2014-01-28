#!/bin/sh
for i in array boolean date-object date-parser exceptions 'function' getset global math1 math2 math3 number object operators regexp regexp2 regexp4 statements string syntax; do
  echo ""
  echo ""
  echo '*****************************************************************'
  echo '*' $i
  echo ""
  if [ `uname` = 'Darwin' ]; then
    ../../ecmascript_standalone_futhark/build/Debug/jsshell jsshell/$i.js
  else
    ../../ecmascript_standalone_futhark/jsshell/debug_unicode/jsshell.exe jsshell/$i.js
  fi
done

#!/bin/sh
for i in array boolean date-object date-parser exceptions function global math1 math2 math3 number object operators regexp regexp2 statements string syntax; do
  echo ""
  echo ""
  echo '*****************************************************************'
  echo '*' $i
  echo ""
  ../../ecmascript_standalone_futhark/jsshell/debug_unicode/jsshell.exe jsshell/$i.js
done

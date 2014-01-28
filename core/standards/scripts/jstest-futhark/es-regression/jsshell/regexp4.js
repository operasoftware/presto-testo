/* Run this in a jsshell with the parent directory as the current directory */

load("jsshell/prefix.js_hdr")
load("scripts/re_test.js")
load("scripts/regExpTestES4.js")
function showfailure_with_values( s, a, b ) {
    _tests_failed++
    show( s )
    show( a )
    show( b )
}
main()

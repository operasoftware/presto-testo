/* Run this in a jsshell with the parent directory as the current directory */

load("jsshell/prefix.js")
load("scripts/regExpTest.js")
function showfailure_with_values( s, a, b ) {
    _tests_failed++;
    show( s );
    show( a );
    show( b );
}
main()

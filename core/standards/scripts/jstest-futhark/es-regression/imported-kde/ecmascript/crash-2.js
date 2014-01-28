// infinite recursion 2
function foo() {
   foo();
}

try {
  foo();
} catch (e) {
  testPassed("OK. Caught an exception");
}

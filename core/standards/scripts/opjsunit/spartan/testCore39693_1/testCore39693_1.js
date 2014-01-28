// In a separate file as the bug provokes
// a compilation crash. Once fix can be
// assumed, move into testSwitch_spec.js
//
function testSwitchCompile_1() {
  // Pass condition is not crash.
  var f = function(x) {
    switch (x)
    {
    case 2147483647:
       return false;
    }
    return true;
  };
  for (var i = 0; i < 32; i++)
    assertTrue(f(i));
}
testSwitchCompile_1.metadata = {
  bug:"CORE-39693"
};


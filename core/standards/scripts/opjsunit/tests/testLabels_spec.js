function testLabels_0() {
  function func() {
    eval("a:for (var i=0; i<10; i++) { a:for (var j=0; j<10; j++) {break a}}");
  }
  assertThrows(SyntaxError(), func);
}

function testLabels_1() {
  function func() {

    eval("a:for (var i=0; i<10; i++) { var j; (function() {a:for (j=0; j<10; j++) {break a}})()}");
    assertEquals(10, i);
    assertEquals(0, j);
  }
  assertDoesNotThrow(func);
}

function testLabels_2 () { 
    function t() {
	while (1) { 
	    bl: { break; } 
	    return 0; 
	} 
	return 1;
    }
    assertEquals(1, t());
}
testLabels_2.metadata = {
  bug:"CORE-31857"
}

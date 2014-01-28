function testBlock_0() {
  var x =0;
  foo:
  {break foo;
   x=1;}
  assertEquals(0,x);
}
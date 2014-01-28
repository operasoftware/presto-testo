function MyObject() {
  this.x = 99;
}

eval("b = new MyObject();");
var bx = b.x   // rule out side effects of eval() in shouldBe() test function
shouldBe("bx", "99");


eval("var c = new MyObject();"); // the 'var' makes a difference
var cx = c.x;
shouldBe("cx", "99");

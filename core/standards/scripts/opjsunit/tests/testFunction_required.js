function testToString_0() {
  var a = function () {};
  assertMatches(/function \(\) {\s*}/,a.toString());
}
testToString_0.metadata = {
  bug:"CARAKAN-259"
};

function testToString_1() {
  var a = function (x) {return x*x;};
  assertMatches(/function \(x\) {\s*return x\s*\*\s*x;\s*}/,a.toString());
}
testToString_1.metadata = {
  bug:"CARAKAN-259"
};

function testToString_2() {
  var a = new Function();
  assertMatches(/function anonymous\(\) {\s*}/,a.toString());
}
testToString_2.metadata = {
  bug:"CARAKAN-259"
};

function testToString_3() {
  var a = new Function("x", "return x*x;");
  assertMatches(/function anonymous\(x\) {\s*return x\s*\*\s*x;\s*}/,a.toString());
}
testToString_3.metadata = {
  bug:"CARAKAN-259"
};

function testToString_4() {
  var f = new Function("var F = function () { return 1; }; return F.toString();");
  assertMatches(/^function /, f());
  var g = new Function("var F = function () { var G = function () { return 2; }; return G.toString(); }; return F();");
  assertMatches(/^function /, g());
  var h = new Function("var F = function () { return 1; }; return F();");
  assertMatches(/^function /, h);
}
testToString_4.metadata = {
  bug:"CORE-32336"
};

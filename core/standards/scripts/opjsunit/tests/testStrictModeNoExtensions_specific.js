// http://wiki.ecmascript.org/doku.php?id=conventions:recommendations_for_implementors
function testConstInStrictCode_0() {
  var ex=false;
  try{
    eval('"use strict"; const A=1;');
  }catch(e){
    ex=true;
  }
  assertTrue(ex);
}

function testFunctionStatementInStrictCode_0() {
  var ex=false;
  try{
    eval('"use strict"; if(true){function(){}}');
  }catch(e){
    ex=true;
  }
  assertTrue(ex);
}
/*
testSomething.metadata = {
  bug:"SOME-1"
};*/
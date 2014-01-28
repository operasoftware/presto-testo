function OpJsUnitHarnessError(message) {
  this.message = message;
}

OpJsUnitHarnessError.prototype.toString = function() {
  return this.message;
};

if (!("writeln" in this)) {
  if("print" in this) {
    writeln = function(str) {
      print(str + "\n");
    };
  } else if ("alert" in this) {
    writeln = function(str) {
      alert(str + "\n");
    };
  } else {
    throw new OpJsUnitHarnessError("No sutiable print function found");
  }
}

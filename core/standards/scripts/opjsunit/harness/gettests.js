for (x in this) {
    if (typeof this[x] == 'function' && x.substring(0, 4) == 'test') {
      //We have a testcase
      var func = this[x];
      var comment = "";
      if ('metadata' in func) {
	for(item in func.metadata) {
	  comment += (" " + item + ": " + func.metadata[item]);
	}
      }
      writeln(x);
      writeln("comment: " + comment);
      writeln(this[x]);
      writeln("##opjsunit: function end##");
    }
}

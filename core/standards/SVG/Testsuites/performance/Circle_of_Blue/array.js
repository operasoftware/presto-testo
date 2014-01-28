function IsNumeric(input) {
   return (input - 0) == input && input.length > 0;
}


if (!Array.prototype.forEach)
{
  Array.prototype.forEach = function(fun /*, thisp*/)
  {
    var len = this.length;
    if (typeof fun != "function")
      throw new TypeError();

    var thisp = arguments[1];
    for (var i = 0; i < len; i++)
    {
      if (i in this)
        fun.call(thisp, this[i], i, this);
    }
  };
}

if (!Array.prototype.map)
{
  Array.prototype.map = function(fun /*, thisp*/)
  {
    var len = this.length;
    if (typeof fun != "function")
      throw new TypeError();

    var res = new Array(len);
    var thisp = arguments[1];
    for (var i = 0; i < len; i++)
    {
      if (i in this)
        res[i] = fun.call(thisp, this[i], i, this);
    }

    return res;
  };
}

Array.prototype.distinct =
  function() {
    var a = [];
    var l = this.length;
    for(var i=0; i<l; i++) {
      for(var j=i+1; j<l; j++) {
        // If this[i] is found later in the array
        if (this[i] === this[j])
          j = ++i;
      }
      a.push(this[i]);
    }
    return a;
  };

Array.prototype.groupBy = function(getKeyName) {
  var res = {};
  this.forEach(function(x) {
    var k = getKeyName(x);
    var v = res[k];
    if (!v) v = res[k] = [];
    v.push(x);
  });
  return res;
};

if (!Array.prototype.filter)
{
  Array.prototype.filter = function(fun /*, thisp*/)
  {
    var len = this.length;
    if (typeof fun != "function")
      throw new TypeError();

    var res = new Array();
    var thisp = arguments[1];
    for (var i = 0; i < len; i++)
    {
      if (i in this)
      {
        var val = this[i]; // in case fun mutates this
        if (fun.call(thisp, val, i, this))
          res.push(val);
      }
    }

    return res;
  };
}

if (!Array.prototype.sum)
{
	Array.prototype.sum = function(){
		for(var i=0,sum=0;i<this.length;sum+=this[i++]);
		return sum;
	}
}

if (!Array.prototype.max)
{
	Array.prototype.max = function(){
		return Math.max.apply({},this)
	}
}

if (!Array.prototype.min)
{
	Array.prototype.min = function(){
		return Math.min.apply({},this)
	}
}

if (!Array.prototype.mkstring)
{
	Array.prototype.mkstring = function(separator) {
		var sep = separator == null || separator == undefined ? ',' : separator
		var acc = ''
		for (var i = 0; i < this.length; i++) {
			if (i >= 1) {
				acc += sep
			}
			acc += this[i]
		}
		return acc
	}
}

if (!Array.prototype.indexOf)
{
  Array.prototype.indexOf = function(elt /*, from*/)
  {
    var len = this.length;

    var from = Number(arguments[1]) || 0;
    from = (from < 0)
         ? Math.ceil(from)
         : Math.floor(from);
    if (from < 0)
      from += len;

    for (; from < len; from++)
    {
      if (from in this &&
          this[from] === elt)
        return from;
    }
    return -1;
  };
}

if (!Array.prototype.flatten)
{
	Array.prototype.flatten = function flatten(){
	   var flat = [];
	   for (var i = 0, l = this.length; i < l; i++){
		   var type = Object.prototype.toString.call(this[i]).split(' ').pop().split(']').shift().toLowerCase();
		   if (type) { flat = flat.concat(/^(array|collection|arguments|object)$/.test(type) ? flatten.call(this[i]) : this[i]); }
	   }
	   return flat;
	};
}

if (!Array.prototype.intersect)
{
	Array.prototype.intersect = function() {
		if (!arguments.length)
			return [];
		var a1 = this;
		var a = a2 = null;
		var n = 0;
		while(n < arguments.length) {
			a = [];
			a2 = arguments[n];
			var l = a1.length;
			var l2 = a2.length;
			for(var i=0; i<l; i++) {
				for(var j=0; j<l2; j++) {
					if (a1[i] === a2[j])
						a.push(a1[i]);
				}
			}
			a1 = a;
			n++;
		}
		return a.distinct();
	 };
 }
 
if (!Array.prototype.union)
{
	Array.prototype.union = function() {
		var a = [].concat(this);
		var l = arguments.length;
		for(var i=0; i<l; i++) {
			a = a.concat(arguments[i]);
		}
		return a.distinct();
	};
}

if (!Array.prototype.unionAll)
{
	Array.prototype.unionAll = function() {
		var a = [].concat(this);
		var l = arguments.length;
		for(var i=0; i<l; i++) {
			a = a.concat(arguments[i]);
		}
		return a
	};
}
  
/*Array.prototype.contains = function (element) {
	for (var i = 0; i < this.length; i++) {
		if (this[i] == element) {
			return true;
		}
	}
	return false;
}*/




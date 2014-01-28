var window=the_global_object;
var self=window;
var opera={};

function document_write(s)
{
  var res;
  if ((res = (/^\s*<script.*src=["'](.*?)["'].*>.*<\/script>\s*$/i).exec(s)) != null)
    load(res[1]);
  else
    alert(s.replace(/<[a-zA-Z]+.*?>/g,"").replace(/<\/[a-zA-Z]+>/g,""));
}

var navigator = {
    appName: "Opera",
    userAgent: "Opera/10.0 (NoGogi)"
}

var document = {
    getElementById: function () { return null; },
    write: document_write,
    writeln: function (s) { this.write(String(s) + "\n"); } 
};

var fnord = 10;
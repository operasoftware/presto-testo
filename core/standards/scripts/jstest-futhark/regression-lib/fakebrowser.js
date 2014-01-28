var window=the_global_object;

var self=window;

var top=window;

var opera = {
    collect: function () {},
    jsshell: true
}

var $$mode = "only show test failures";  // or "PRETTYPRINT" or "ART".

var navigator = {
    appName: "Opera",
    userAgent: "Opera/10.0 (NoGogi)"
}

function document_write(s)
{
    var res;
    if ((res = (/^\s*<script.*src=["'](.*?)["'].*>.*<\/script>\s*$/i).exec(s)) != null)
        load(res[1]);
    else
        alert(s.replace(/<[a-zA-Z]+.*?>/g,"").replace(/<\/[a-zA-Z]+>/g,""));
}

var document = {
    getElementById: function () { return null; },
    open: function () {},
    close: function () {},
    write: document_write,
    writeln: function (s) { this.write(String(s) + "\n"); } 
}

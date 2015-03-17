<?php
header('Set-Cookie: 009=1; Version=1');
header("Cache-Control: no-cache, must-revalidate");
header("Expires: Thu, 01-Jan-1970 00:00:10 GMT");
?><doctype html>
<html>
 <head><title>JavaScript interaction</title></head>
 <body>
  <div id="CookieHeader" style="display:none">009=<?php print($_COOKIE["009"]); ?></div>
  <p id="output">please wait...</p>
   <script type="text/javascript">
    var expected = "009=1";
    var result = 0;
    var cookies = document.cookie.split('; ');
    for (var i = 0; i < cookies.length; i++) {
     if (cookies[i] == expected) result = 1;
    }
    if (document.getElementById("CookieHeader").innerHTML != expected) result = 0;
    document.cookie="009=2";
    function callback (subResult) {
     result = result && subResult;
     document.getElementById("output").innerHTML = (result ? "PASS":"FAIL");
     try{top.opener.rr(result);}catch(e){}
    }
   </script>
   <noscript>Scripting required</noscript>
  </p>
  <iframe src="009-2.php" style="display:none"></iframe>
 </body>
</html>
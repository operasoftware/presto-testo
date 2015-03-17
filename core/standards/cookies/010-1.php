<?php
header("Cache-Control: no-cache, must-revalidate");
header("Expires: Thu, 01-Jan-1970 00:00:10 GMT");
?><doctype html>
<html>
 <head><title>HttpOnly</title></head>
 <body>
  <div id="CookieHeader" style="display:none">010=<?php print($_COOKIE["010"]); ?></div>
   <script type="text/javascript">
    var expected = "010=1";
    result = document.getElementById("CookieHeader").innerHTML == expected;
    var cookies = document.cookie.split('; ');
    for (var i = 0; i < cookies.length; i++) {
     if (cookies[i] == expected) result = 0;
    }
    document.write (result ? "PASS":"FAIL");
    try{top.opener.rr(result);}catch(e){}
   </script>
   <noscript>Scripting required</noscript>
  </p>
 </body>
</html>
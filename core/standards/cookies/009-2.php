<?php
header("Cache-Control: no-cache, must-revalidate");
header("Expires: Thu, 01-Jan-1970 00:00:10 GMT");
?><doctype html>
<html>
 <head><title>Expires</title></head>
 <body>
  <p id="output">please wait...</p>
   <script type="text/javascript">
    var expected = "009=2";
    var result = 0;
    var cookies = document.cookie.split('; ');
    for (var i = 0; i < cookies.length; i++) {
     if (cookies[i] == expected) result = 1;
    }
    parent.callback(result);
   </script>
   <noscript>Scripting required</noscript>
  </p>
 </body>
</html>
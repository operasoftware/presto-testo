<?php
 header('Set-Cookie: 017=1; Httponly; Max-age=1');
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0//EN" "http://www.w3.org/TR/REC-html40/strict.dtd">
<html>
<head>
<title>HTTPOnly and XHR</title>
</head>
<body>
<noscript><p>JavaScript required</p></noscript>
<script type="text/javascript">
try {
 var req;
 try { req = new XMLHttpRequest(); } catch(e) {}
 if (!req) try { req = new ActiveXObject("Msxml2.XMLHTTP"); } catch(e) {}
 if (!req) try { req = new ActiveXObject("Microsoft.XMLHTTP"); } catch(e) {}
 req.open('GET', '<?php echo $_SERVER['REQUEST_URI'];?>', false);
 req.send(null);
 passed = 1;
 if (req.getResponseHeader("Set-Cookie")) passed = 0;
 location.href = "result.php?result="+passed;
} catch(e) {
 location.href = "result.php?result=0";
}
</script>
</body>
</body>
</html>




<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <title>Test Results</title>
</head>
<body>
<div>
<?php
  if (is_scalar($_GET['result']))
    print "Result: ".$_GET['result'];
  else
    print "Result: Fail";
?>
</div>
</body>
</html>
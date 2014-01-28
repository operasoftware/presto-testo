<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <title>Test Results</title>
</head>
<body>
<div>
<?php
  if (isset($_FILES['up']))
    print "Result: Pass";
  else
    print "Result: Fail";
?>
</div>
</body>
</html>

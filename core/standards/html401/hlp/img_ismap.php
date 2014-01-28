<?php
$qs = $_SERVER["QUERY_STRING"];

if(isset($qs)){
 $qsa = explode(",",$qs);
 if(is_numeric($qsa[0])&&is_numeric($qsa[1])){
  echo '  
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN">
<html>
<head>
<title>result</title>
</head>
<body>
<p id="status">PASS</p>
</body>
</html>
  ';
 }
 else{
  echo '  
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN">
<html>
<head>
<title>result</title>
</head>
<body>
<p id="status">FAIL</p>
</body>
</html>
  ';
 }
}
else{
 echo "FAIL";
}
?>
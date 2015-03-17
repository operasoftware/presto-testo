<!doctype html>
<html>
 <head>
  <title>Cookie2 return values</title>
  <meta http-equiv="Content-Type" content="text/html;charset=utf-8">
 </head>
 <body>
<?php

$cookies = split("; ", stripslashes($_SERVER['HTTP_COOKIE']));
$path = substr($_SERVER['REQUEST_URI'], 0, strrpos($_SERVER['REQUEST_URI'], "/") + 1);
$testedCookies = array();
$outputStr = "";
$result = 1;

#Some cookies should have their attributes immediately following, in a specific order
function checkOrder ($id) {
 global $cookies, $testedCookies;
 $testedCookies[] = $id;
 $pass = 0;
 for ($i = 0; $i < count($cookies); $i++) {
  if ($cookies[$i] == $id."=1") {
   $pass = 1;
   for ($j = 1; $j < func_num_args(); $j++) {
    if ($cookies[$i+$j] != func_get_arg($j))
     $pass = 0;
 }}}
 if ($pass)
  output ("$id has attributes in the right order", $pass);
 else
  output ("$id has attributes in the wrong order", $pass);
}

#Some cookies (Netscape) should not have attributes following
function checkNoAttribs ($id) {
 global $cookies, $testedCookies;
 $testedCookies[] = $id;
 $pass = 0;
 for ($i = 0; $i < count($cookies); $i++) {
  if ($cookies[$i] == $id."=1") {
   $pass = 1;
   output ("$id correctly has no attributes", strpos($cookies[$i+1], '$') === false);
  }
 }
 if (!$pass) output ("$id incorrectly has attributes", 0);
}

#Some cookies should not be present
function checkNoPresence ($id) {
 global $testedCookies;
 $testedCookies[] = $id;
 if(!strpos($_SERVER['HTTP_COOKIE'], $id))
  output("$id is correctly not present", 1);
 else
  output("$id is present, but shouldn't be", 0);
}

#None of the cookies should be present more than once
function checkCount () {
 global $cookies, $testedCookies;
 $pass = 1;
 foreach ($testedCookies as $testedCookie) {
  $count = 0;
  foreach ($cookies as $cookie) {
   if (!(strpos($cookie, $testedCookie) === false)) $count++;
  }
  if ($count > 1) $pass = 0;
 }
 if ($pass)
  output("Count is correct", $pass);
 else
  output("Count is wrong", $pass);
}

#Version should be 1 or greater
function checkVersion() {
 $pass = $_COOKIE['$Version']>=1;
 if ($pass)
  output("Version is correct", $pass);
 else
  output("Version is wrong", $pass);
}

function output($text, $pass) {
 global $outputStr, $result;
 $outputStr .= "<tr><td class='".($pass?"OK":"NG")."'>$text</td></tr>\n";
 if (!$pass) $result = 0;
}

checkVersion();
checkOrder      ("306-01", '$Path="/"',             '$Domain="opera.com"');
checkNoAttribs  ("306-02");
checkNoPresence ("306-03");
checkNoPresence ("306-04");
checkOrder      ("306-05", '$Path="'.$path.'"',    '$Domain=".opera.com"');
checkOrder      ('306-06', '$Domain="oPeRa.CoM"');
checkOrder      ('306-07', '$Path="/"');
checkOrder      ('306-08', '$Path="/"',            '$Port="80"');
checkNoPresence ("306-09");
checkCount();

echo "<p>".($result?"PASS":"FAIL")."</p>\n";
echo "<table>\n$outputStr</table>\n";
?>
  <style type="text/css">
   .OK {background:green}
   .NG {background:red}
   #PHPValues {display:none}
  </style>
 <p id="PHPValues"><?php echo ($_SERVER['HTTP_COOKIE']) ?></p>
 <script type="text/javascript">
  var php = document.getElementById("PHPValues").innerHTML;
  if (php.substr(0,9) == "$Version=") php = php.substr (php.indexOf(";") + 2);
  if (php != document.cookie) document.getElementsByTagName("p")[0].innerHTML = "FAIL (JavaScript != php cookies)";
  try{top.opener.postMessage(document.getElementsByTagName("p")[0].innerHTML == "PASS", "*");}catch(e){}
 </script>
 <p>Cookie 2 must be enabled</p>
 </body>
</html>

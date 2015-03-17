<?php
include '301-2.php';
$output = "";
$invalidCookie = 0;
$missingCookie = 0;
$sessionCookiePresent = 0;
$sessionCookieMissing = 0;

foreach ($cookies as $cookie => $data) {
 $output .= "<tr><td>$cookie</td><td>";
 if (strlen($data[0]) < 50)
  $output .= $data[0];
 else
  $output .= "[".strlen($data[0])." bytes of data]";
 $output .= "</td><td>";
 if (0 == $data[1]) {
  if (isset($_COOKIE[$cookie])) {
   $output .= "Not present</td><td class='NG'>Present";
   $invalidCookie = 1;
  } else {
   $output .= "Not present</td><td class='OK'>Not present";
  }
 } else if (1 == $data[1]) {
  if (isset($_COOKIE[$cookie])) {
   $output .= "Session only</td><td class='session'>Present";
   $sessionCookiePresent = 1;
  } else {
   $output .= "Session only</td><td class='session'>Not present";
   $sessionCookieMissing = 1;
  }
 } else if (2 == $data[1]) {
  if (isset($_COOKIE[$cookie])) {
   $output .= "Present</td><td class='OK'>Present";
  } else {
   $output .= "Present</td><td class='NG'>Not present";
   $missingCookie = 1;
  }
 }
 $output .= "</td></tr>\n";
 }

$pass = 0;
if (!$invalidCookie && !$missingCookie && ($sessionCookiePresent XOR $sessionCookieMissing)) $pass = 1;;
?><!doctype html>
<html>
 <head>
  <title>Various Paths</title>
  <meta http-equiv="Content-Type" content="text/html;charset=utf-8">
 </head>
 <body>
  <p><?php echo $pass?"PASS":"FAIL"?></p>
  <?php if ($pass) echo "<p>(".($sessionCookiePresent?"For a running session. Restart and come straight back to this page to test for a terminated session.":"For a terminated session.").")</p>" ?>
  <style type="text/css">
   td,th {border:1px solid black}
   .OK {background:green}
   .NG {background:red}
   .session {background:yellow}
   #PHPValues {display:none}
  </style>
  <table>
   <tr><th>ID</th><th>Value</th><th>Expected</th><th>Actual</th></tr>
<?php echo $output ?></table>
 <p id="PHPValues"><?php echo ($_SERVER['HTTP_COOKIE']) ?></p>
 <script type="text/javascript">
  var php = document.getElementById("PHPValues").innerHTML;
  if (php.substr(0,9) == "$Version=") php = php.substr (php.indexOf(";") + 2);
  if (php != document.cookie) document.getElementsByTagName("p")[0].innerHTML = "FAIL (JavaScript != php cookies)";
  try{top.opener.rr(document.getElementsByTagName("p")[0].innerHTML == "PASS");}catch(e){}
 </script>

<?php
$expectedPresense['309-01'] = array("presence" => 0, "value" => '309-01=""";',     "result" => '');
$expectedPresense['309-02'] = array("presence" => 1, "value" => '309-02="\'";'   , "result" => '"\'"');
$expectedPresense['309-03'] = array("presence" => 0, "value" => '309-03="\'"\'";', "result" => '');
$expectedPresense['309-04'] = array("presence" => 0, "value" => '309-04="/"";',    "result" => '');
$expectedPresense['309-05'] = array("presence" => 1, "value" => '309-05="\"";',    "result" => '"\\""');
$expectedPresense['309-06'] = array("presence" => 1, "value" => "309-06='x;",      "result" => "'x");
$expectedPresense['309-07'] = array("presence" => 1, "value" => "309-07=''';",     "result" => "'''");
$expectedPresense['309-08'] = array("presence" => 0, "value" => "309-08='\"';",    "result" => "");
$expectedPresense['309-09'] = array("presence" => 0, "value" => '309-09="xx"xx";', "result" => '');
$expectedPresense['309-10'] = array("presence" => 0, "value" => '309-10="xx"xx"xx";',  "result" => '');
$expectedPresense['309-11'] = array("presence" => 0, "value" => '309-11=xx"xx"xx";',   "result" => "");
$expectedPresense['309-12'] = array("presence" => 1, "value" => '309-12="xx"xx;',  "result" => '"xx"');
$expectedPresense['309-13'] = array("presence" => 0, "value" => '309-13=\";',      "result" => '');
$expectedPresense['309-14'] = array("presence" => 1, "value" => '309-14=xx xx;',   "result" => 'xx xx');
$expectedPresense['309-15'] = array("presence" => 1, "value" => '309-15=xx xx',    "result" => 'xx xx');
$expectedPresense['309-16'] = array("presence" => 1, "value" => '309-16=xx;',    "result" => 'xx');
$expectedPresense['309-17'] = array("presence" => 1, "value" => '309-17=",;";',    "result" => '",;"');
$expectedPresense['309-18'] = array("presence" => 1, "value" => '309-18=,;;',    "result" => ',');
$expectedPresense['309-19'] = array("presence" => 1, "value" => '309-19=x,x;',    "result" => 'x,x');

$failure = 0;
$output = "";
$output2 = "";

#PHP bug fix, it cannot parse cookie 17 correctly
#Remember to remove the ; from the value set, 17 might be the last cookie
if (strpos(stripslashes($_SERVER['HTTP_COOKIE']), substr($expectedPresense['309-17']["value"],0,strlen($expectedPresense['309-17']["value"])-1)) > 0)
    $_COOKIE['309-17'] = $expectedPresense['309-17']["result"];

foreach ($expectedPresense as $cookie => $data) {
 $output .= "<tr><td>$cookie</td><td>".$data["value"]."</td><td>".$data["result"]."</td><td class='";
 if ($data["presence"] && isset($_COOKIE[$cookie])) {
  if ($data["result"] == stripslashes($_COOKIE[$cookie]))
   $pass = 1;
  else
   $pass = 0;
 } else if ($data["presence"] && !isset($_COOKIE[$cookie])) {
  $pass = 0;
 } else if (!$data["presence"] && isset($_COOKIE[$cookie])) {
  $pass = 0;
 } else if (!$data["presence"] && !isset($_COOKIE[$cookie])) {
  $pass = 1;
 }
 if (!$pass) $failure = 1;
 $output .= $pass?"OK":"NG";
 $output .= "'>".stripslashes($_COOKIE[$cookie])."</td></tr>\n";
}

#If we wanted to do this, the user would have to clear cookies first
#foreach ($_COOKIE as $cookie => $data) {
# #Flag it if it is not in $expectedPresense
# $pass = 0;
# foreach  ($expectedPresense as $cookie2 => $data2) {
#  if ($cookie == $cookie2 || $cookie == '$Version' || $cookie == '"' || $cookie == '\"') $pass = 1; #The last two being php bugs
# }
# if (!$pass) {
#   $failure = 1;
#   $output2 .= "\n<tr><td class='NG'>$cookie</td><td class='NG'>$data</td></tr>\n";
# }
#}
#if ($output2) $output2 = "<p>Extra Cookies</p>\n<table>\n<tr><th>Name</th><th>Value</th></tr>$output2</table>";
?>
<!doctype html>
<html>
<head>
  <title>Cookie Quoting</title>
  <meta http-equiv="Content-Type" content="text/html;charset=utf-8">
</head>
<body>
<p><?php echo $failure?"FAIL":"PASS"?></p>
<style type="text/css">
  td,th {border:1px solid black}
  .OK {background:green}
  .NG {background:red}
  #PHPValues {display:none}
</style>
  <p>Details below:</p>
  <table>
   <tr><th>ID</th><th>Set</th><th>Expected</th><th>Result</th></tr>
<?php echo $output?>  </table>
<?php echo $output2?>
 <p id="PHPValues"><?php echo ($_SERVER['HTTP_COOKIE']) ?></p>
 <script type="text/javascript">
  var php = document.getElementById("PHPValues").innerHTML;
  if (php.substr(0,9) == "$Version=") php = php.substr (php.indexOf(";") + 2);
  if (php != document.cookie) document.getElementsByTagName("p")[0].innerHTML = "FAIL (JavaScript != php cookies)";
  try{top.opener.rr(document.getElementsByTagName("p")[0].innerHTML == "PASS");}catch(e){}
 </script>
</body>
</html>

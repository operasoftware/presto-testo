<?php
$expectedPresense['309-20-1'] = array("presence" => 1, "value" => '309-20-1=x, 309-20-2=x',             "result" => 'x');
$expectedPresense['309-20-2'] = array("presence" => 1, "value" => '309-20-1=x, 309-20-2=x',             "result" => 'x');
$expectedPresense['309-21-1'] = array("presence" => 1, "value" => '309-21-1=x, 309-21-2=x,309-21-3',    "result" => 'x');
$expectedPresense['309-21-2'] = array("presence" => 0, "value" => '309-21-1=x, 309-21-2=x,309-21-3',    "result" => '');
$expectedPresense['309-21-3'] = array("presence" => 1, "value" => '309-21-1=x, 309-21-2=x,309-21-3',    "result" => '');
$expectedPresense['309-22-1'] = array("presence" => 0, "value" => '309-22-1=x,309-22-2=x, 309-22-2=x',  "result" => '');
$expectedPresense['309-22-2'] = array("presence" => 1, "value" => '309-22-1=x,309-22-2=x, 309-22-2=x',  "result" => 'x');
$expectedPresense['309-22-3'] = array("presence" => 1, "value" => '309-22-1=x,309-22-2=x, 309-22-2=x',  "result" => 'x');

$failure = 0;
$output = "";
$output2 = "";

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
 <p>Cookie 2 must be enabled</p>
</body>
</html>

<?php
$port = $_SERVER['SERVER_PORT'];
if (isset($_SERVER['HTTP_X_FORWARDED_HOST'])) {
 $port = substr($_SERVER['HTTP_X_FORWARDED_HOST'], strpos($_SERVER['HTTP_X_FORWARDED_HOST'], ":")+1);
}
$expectedPresense["307-01"] = array("presence" => 0, "value" => 'Port="90"');
$expectedPresense["307-02"] = array("presence" => 1, "value" => 'Port="'.$port.','.$port.'"');
$expectedPresense["307-03"] = array("presence" => 1, "value" => 'Port="81,'.$port.'"');
$expectedPresense["307-04"] = array("presence" => 0, "value" => 'Port="81 '.$port.'"');
$expectedPresense["307-05"] = array("presence" => 0, "value" => 'Port="81;'.$port.'"');
$expectedPresense["307-06"] = array("presence" => 0, "value" => 'Port="[40k data]"');
$expectedPresense["307-07"] = array("presence" => 0, "value" => 'Port="XXX"');
$expectedPresense["307-08"] = array("presence" => 0, "value" => 'Port="XXX, '.$port.'"');
$expectedPresense["307-09"] = array("presence" => 1, "value" => 'Port="'.$port.'"; Port="90";');
$expectedPresense["307-10"] = array("presence" => 0, "value" => 'Port="90"; Port="'.$port.'";"');
$expectedPresense["307-11"] = array("presence" => 0, "value" => 'Port='.$port.'"');
$expectedPresense["307-12"] = array("presence" => 0, "value" => 'Port="'.$port);
$expectedPresense["307-13"] = array("presence" => 1, "value" => 'Port='.$port);
$expectedPresense["307-14"] = array("presence" => 1, "value" => 'Port="0'.$port.'"');
$expectedPresense["307-15"] = array("presence" => 1, "value" => 'Port="+'.$port.'"');
$expectedPresense["307-16"] = array("presence" => 0, "value" => 'Port='.$port.' 90');
$expectedPresense["307-17"] = array("presence" => 0, "value" => 'Port=90 '.$port);
$expectedPresense["307-18"] = array("presence" => 0, "value" => 'Port=90 "'.$port.'"');
$expectedPresense["307-19"] = array("presence" => 0, "value" => 'Port="090"');
$expectedPresense["307-20"] = array("presence" => 0, "value" => 'Port="+90"');

$failure = 0;
$output = "";

foreach ($expectedPresense as $cookie => $data) {
 $output .= "<tr><td>$cookie</td><td>".$data["value"]."</td>";
 if ($data["presence"] && isset($_COOKIE[$cookie])) {
  $output .= "<td>Present</td><td class='OK'>Present</td>";
 } else if ($data["presence"] && !isset($_COOKIE[$cookie])) {
  $output .= "<td>Present</td><td class='NG'>Not present</td>";
  $failure = 1;
 } else if (!$data["presence"] && isset($_COOKIE[$cookie])) {
  $output .= "<td>Not present</td><td class='NG'>Present</td>";
  $failure = 1;
 } else if (!$data["presence"] && !isset($_COOKIE[$cookie])) {
  $output .= "<td>Not present</td><td class='OK'>Not present</td>";
 }
 $output .= "</tr>\n";
}
?>
<!doctype html>
<html>
<head>
  <title>Cookie port</title>
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
  <table brder=1>
   <tr><th>ID</th><th>Version</th><th>Expected</th><th>Result</th></tr>
<?php echo $output?>  </table>
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
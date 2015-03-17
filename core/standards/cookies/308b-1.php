<?php
$expectedPresense["308-05"]     = array("presence" => 1, "value" => '308-05=1; Version=1, 308-06=1; Version=1, 308-07=1, Version=1');
$expectedPresense["308-06"]     = array("presence" => 1, "value" => '308-05=1; Version=1, 308-06=1; Version=1, 308-07=1, Version=1');
$expectedPresense["308-07"]     = array("presence" => 0, "value" => '308-05=1; Version=1, 308-06=1; Version=1, 308-07=1, Version=1');
$expectedPresense["308-08"]     = array("presence" => 0, "value" => '308-08=1; Version=1; Max-Age="-1"; Max-Age="1"');
$expectedPresense["308-09"]     = array("presence" => 1, "value" => '308-09=1; Version=1; Max-Age="1"; Max-Age="-1"');
$expectedPresense["308-14"]     = array("presence" => 0, "value" => '308-14=1,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,;');
$expectedPresense["308-15"]     = array("presence" => 0, "value" => '308-15=1, Version=1, Max-Age=1, Path=/, Domain=opera.com,');
$expectedPresense["308-16"]     = array("presence" => 0, "value" => '308-16=1; Version=1; Max-Age="x"; Max-Age="1"');
$expectedPresense["308-17"]     = array("presence" => 0, "value" => '308-17=1; Comment="," Version=1;');
$expectedPresense["308-20"]     = array("presence" => 1, "value" => '308-20=1; Version=1; x');
$expectedPresense["308-22"]     = array("presence" => 1, "value" => '308-22=1; Version=1; Domein="blah"; Pith="yada"; HttpOunly; Non-Secure');
$expectedPresense["308-25"]     = array("presence" => 1, "value" => '308-25=1; Comment=","; Version=1;');
$expectedPresense['\"308-26\"'] = array("presence" => 0, "value" => '"308-26"=1;');

$failure = 0;
$output = "";
foreach ($expectedPresense as $cookie => $data) {
 $output .= "<tr><td>".stripslashes($cookie)."</td><td>".$data["value"]."</td>";
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
  <title>Cookie Error Handling</title>
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

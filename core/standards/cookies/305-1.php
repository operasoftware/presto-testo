<?php
$expectedPresense["305-01"] = array("presence" => 0, "value" => 'notAValidValue');
$expectedPresense["305-02"] = array("presence" => 0, "value" => 'Wed, 08-Nov-2035 01:04:33');
$expectedPresense["305-03"] = array("presence" => 0, "value" => '0');
$expectedPresense["305-04"] = array("presence" => 1, "value" => '1');
$expectedPresense["305-05"] = array("presence" => 1, "value" => '10000');
$expectedPresense["305-06"] = array("presence" => 0, "value" => '-1');
$expectedPresense["305-07"] = array("presence" => 0, "value" => '0.5');
$expectedPresense["305-08"] = array("presence" => 1, "value" => '9999999999999999999999999');
$expectedPresense["305-09"] = array("presence" => 0, "value" => '-9999999999999999999999999');
$expectedPresense["305-10"] = array("presence" => 1, "value" => '+10000');
$expectedPresense["305-11"] = array("presence" => 0, "value" => 'Fri, 13-Dec-1901 20:45:52');
$expectedPresense["305-12"] = array("presence" => 0, "value" => '[40k data]');
$expectedPresense["305-13"] = array("presence" => 0, "value" => '0+10000');
$expectedPresense["305-14"] = array("presence" => 0, "value" => '10000+0');
$expectedPresense["305-15"] = array("presence" => 0, "value" => 'Max-Age=10000"');
$expectedPresense["305-16"] = array("presence" => 0, "value" => 'Max-Age="10000');
$expectedPresense["305-17"] = array("presence" => 1, "value" => 'Max-Age=10000');
$expectedPresense["305-18"] = array("presence" => 0, "value" => 'Max-Age=100"00');

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
  <title>Cookie Max-Age</title>
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
</body>
</html>
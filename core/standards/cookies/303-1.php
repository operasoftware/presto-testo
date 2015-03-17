<?php
$expectedPresense["303-01"] = array("presence" => 1, "value" => 'Version=1');
$expectedPresense["303-02"] = array("presence" => 1, "value" => 'Version=2');
$expectedPresense["303-03"] = array("presence" => 0, "value" => 'Version=x');
$expectedPresense["303-04"] = array("presence" => 1, "value" => 'Version="1"');
$expectedPresense["303-05"] = array("presence" => 0, "value" => 'Version="1');
$expectedPresense["303-06"] = array("presence" => 0, "value" => 'Version=1"');
$expectedPresense["303-07"] = array("presence" => 1, "value" => ';Version="1"');
$expectedPresense["303-08"] = array("presence" => 1, "value" => 'Version="1";');
$expectedPresense["303-09"] = array("presence" => 0, "value" => 'Version:"1"');
$expectedPresense["303-10"] = array("presence" => 0, "value" => 'Version=;"1"');
$expectedPresense["303-11"] = array("presence" => 1, "value" => 'Version="50000"');
$expectedPresense["303-12"] = array("presence" => 1, "value" => 'Version="99999999999999999"');
$expectedPresense["303-13"] = array("presence" => 0, "value" => 'Version=-1');
$expectedPresense["303-14"] = array("presence" => 1, "value" => 'Version=+1');
$expectedPresense["303-15"] = array("presence" => 0, "value" => 'Version="-99999999999999999"');
$expectedPresense["303-16"] = array("presence" => 0, "value" => 'Version=0');
$expectedPresense["303-17"] = array("presence" => 0, "value" => 'Version=;');
$expectedPresense["303-18"] = array("presence" => 1, "value" => 'Version=1.5;');

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
  <title>Cookie version</title>
  <meta http-equiv="Content-Type" content="text/html;charset=utf-8">
</head>
<body>
<p><?php echo $failure?"FAIL":"PASS"?></p>
<script type="text/javascript"></script>
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
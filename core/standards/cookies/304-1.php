<?php

$expectedPresense["304-01"] = array("presence" => 1, "value" => 'Domain="opera.com"');
$expectedPresense["304-02"] = array("presence" => 1, "value" => 'Domain=".opera.com"');
$expectedPresense["304-03"] = array("presence" => 0, "value" => 'Domain=".com"');
$expectedPresense["304-04"] = array("presence" => 0, "value" => 'Domain="pera.com"');
$expectedPresense["304-05"] = array("presence" => 0, "value" => 'Domain="?pera.com"');
$expectedPresense["304-06"] = array("presence" => 0, "value" => 'Domain="*.opera.com"');
$expectedPresense["304-07"] = array("presence" => 0, "value" => 'Domain="300.300.300.300"');
$expectedPresense["304-08"] = array("presence" => 0, "value" => 'Domain="123456123456123456"');
$expectedPresense["304-09"] = array("presence" => 0, "value" => 'Domain="/opera.com"');
$expectedPresense["304-10"] = array("presence" => 0, "value" => 'Domain="opera.com/"');
$expectedPresense["304-11"] = array("presence" => 0, "value" => 'Domain="example.com"');
$expectedPresense["304-12"] = array("presence" => 0, "value" => 'Domain="[40k data]"');
$expectedPresense["304-13"] = array("presence" => 0, "value" => 'Domain="opera com"');
$expectedPresense["304-14"] = array("presence" => 0, "value" => 'Domain=opera.com"');
$expectedPresense["304-15"] = array("presence" => 0, "value" => 'Domain="opera.com');
$expectedPresense["304-16"] = array("presence" => 1, "value" => 'Domain=opera.com');
$expectedPresense["304-17"] = array("presence" => 0, "value" => 'Domain="*.com"');
$expectedPresense["304-18"] = array("presence" => 0, "value" => 'Domain="*opera.com"');
$expectedPresense["304-19"] = array("presence" => 0, "value" => 'Domain="*pera.com"');
$expectedPresense["304-20"] = array("presence" => 0, "value" => 'Domain=""');
$expectedPresense["304-21"] = array("presence" => 0, "value" => 'Domain="日本"');
$expectedPresense["304-22"] = array("presence" => 1, "value" => 'Domain="OPERA.COM"');
$expectedPresense["304-23"] = array("presence" => 0, "value" => 'Domain="'.$_SERVER['SERVER_ADDR'].'"');

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
  <title>Cookie domain</title>
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
  try{top.opener.postMessage(document.getElementsByTagName("p")[0].innerHTML == "PASS","*");}catch(e){}
 </script>
</body>
</html>
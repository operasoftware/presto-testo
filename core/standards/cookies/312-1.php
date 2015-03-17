<?php

$expectedPresense["312-1"] = array("presence" => 1, "value" => '312-1=x, 312-2=x;', "result" => "x, 312-2=x");
$expectedPresense["312-2"] = array("presence" => 0, "value" => '312-1=x, 312-2=x;', "result" => "");
$expectedPresense["312-3"] = array("presence" => 1, "value" => '312-3=x; 312-4=x;', "result" => "x");
$expectedPresense["312-4"] = array("presence" => 0, "value" => '312-3=x; 312-4=x;', "result" => "");

$failure = 0;
$output = "";

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
  try{top.opener.rr(document.getElementsByTagName("p")[0].innerHTML == "PASS");}catch(e){}
 </script>
</body>
</html>
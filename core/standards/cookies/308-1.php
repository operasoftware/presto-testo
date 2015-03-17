<?php
$expectedPresense["308-01"]   = array("presence" => 1, "value" => '308-01=1');
$expectedPresense["308-02"]   = array("presence" => 1, "value" => '308-02=1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;');
$expectedPresense["308-03"]   = array("presence" => 1, "value" => '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;308-03=1; Version=1; Max-Age="1"');
$expectedPresense["308-04"]   = array("presence" => 1, "value" => '308-04=1; Version=1; Version=1; Version=1; Version=1; Version=1;');
$expectedPresense["308-10"]   = array("presence" => 0, "value" => '308-10=[40k data]');
$expectedPresense["308-11"]   = array("presence" => 1, "value" => '308-11="1";');
$expectedPresense["308-12"]   = array("presence" => 0, "value" => '308-12=1";');
$expectedPresense["308-13"]   = array("presence" => 0, "value" => '308-13="1;');
$expectedPresense['\"308-18'] = array("presence" => 0, "value" => '"308-18=1";');
$expectedPresense["308-19"]   = array("presence" => 1, "value" => '308-19=1; x');
$expectedPresense["308-21"]   = array("presence" => 1, "value" => '308-21=1; Version=1; Domein="blah"; Pith="yada"; HttpOunly; Non-Secure');
$expectedPresense['308-\"23'] = array("presence" => 0, "value" => '308-"23=1;');
$expectedPresense['308-24\"'] = array("presence" => 0, "value" => '308-24"=1";');

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
</body>
</html>

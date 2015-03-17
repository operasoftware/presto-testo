<?php
 include '302-8.php';
$failure = 0;
$output = "";

foreach ($cookies as $cookie => $data) {
 if (isset($expectedCookies[$cookie]) && isset($_COOKIE[$cookie])) {
  $output .= "<tr><td class='OK'>Present</td></tr>\n";
 } else if (!isset($expectedCookies[$cookie]) && isset($_COOKIE[$cookie])) {
  $output .= "<tr><td class='NG'>Present</td></tr>\n";
  $failure = 1;
 } else if (isset($expectedCookies[$cookie]) && !isset($_COOKIE[$cookie])) {
  $output .= "<tr><td class='NG'>Not present</td></tr>\n";
  $failure = 1;
 } else if (!isset($expectedCookies[$cookie]) && !isset($_COOKIE[$cookie])) {
  $output .= "<tr><td class='OK'>Not present</td></tr>\n";
 }
}

function writeCookieTable($filePath) {
 global $output, $path, $failure;
?><!doctype html>
<html>
 <head>
  <title>Various Paths</title>
  <meta http-equiv="Content-Type" content="text/html;charset=utf-8">
 </head>
 <body>
  <p><?php echo $failure?"FAIL":"PASS"?></p>
  <link href="<?php echo $path ?>/302/302.css" rel="stylesheet" type="text/css"/>
  <table>
   <tr><th><?php echo $path.$filePath ?> </th></tr>
<?php echo $output?>  </table>
 <a href="<?php echo $path ?>/302/302.php?location=<?php echo $_SERVER['REQUEST_URI']?>">Direct link</a>
 <p id="PHPValues"><?php echo ($_SERVER['HTTP_COOKIE']) ?></p>
 <script type="text/javascript">
  var php = document.getElementById("PHPValues").innerHTML;
  if (php.substr(0,9) == "$Version=") php = php.substr (php.indexOf(";") + 2);
  if (php != document.cookie) document.getElementsByTagName("p")[0].innerHTML = "FAIL (JavaScript != php cookies Javascript: '"+ document.cookie +"' PHP: '"+   php +"')";
 </script>
 </body>
</html><?php }?>
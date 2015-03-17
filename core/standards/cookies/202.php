<?php
if (substr($_SERVER['HTTP_HOST'], -10) != '.opera.com')
 echo "This testcase must be accessed over opera.com, it was accessed over ".$_SERVER['HTTP_HOST'];
else {
 header('Set-Cookie2: 202=1; Domain="opera.com"; Version=1; ');
 header ("Location: 202-1.php");
}
?>
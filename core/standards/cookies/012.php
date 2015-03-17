<?php
if (substr($_SERVER['HTTP_HOST'], -10) != '.opera.com')
 echo "This testcase must be accessed over an opera.com subdomain";
else {
 header('Set-Cookie: 012-1=1; Domain="opera.com"', false);
 header('Set-Cookie: 012-2=1; Domain="example.com"', false);
 header ("Location: 012-1.php");
}
?>
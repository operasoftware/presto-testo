<?php
if (substr($_SERVER['HTTP_HOST'], -10) != '.opera.com') {
 echo "This testcase must be accessed over an opera.com subdomain";
} else {
 $path = substr($_SERVER['REQUEST_URI'], 0, strrpos($_SERVER['REQUEST_URI'], "/") + 1);
 header('Set-Cookie2: 306-01=1; Path=/; Domain="opera.com"; Version=1;', false);
 header('Set-Cookie: 306-02=1; Path="/"',						false);
 header('Set-Cookie2: $Path=306-03=1; Path=/; Version=1;',						false);
 header('Set-Cookie: $Domain=306-04=1;',						false);
 header('Set-Cookie2: 306-05=1; Path="'.$path.'"; Domain=".opera.com"; Version=1;', false);
 header('Set-Cookie2: 306-06=1; Domain="oPeRa.CoM"; Version=1;', false);
 header('Set-Cookie2: 306-07=1; Path=/; Version=1;', false);
 header('Set-Cookie2: 306-08=1; Port="80"; Path=/; Version=1;', false);
 header('Set-Cookie2: $306-09=1; Version=1;', false);
 header('Location: 306-1.php');
}
?>
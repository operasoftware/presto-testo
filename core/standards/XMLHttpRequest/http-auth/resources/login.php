<?php
 if (!isset($_SERVER['PHP_AUTH_USER'])) {
     header('WWW-Authenticate: Basic realm="My Realm"');
     header('HTTP/1.0 401 Unauthorized');
     echo 'NO_LOGIN';
     exit;
 } else {
     include('userinfo.php');
 }
?>

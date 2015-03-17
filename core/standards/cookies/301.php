<?php
include '301-2.php';
foreach ($cookies as $cookie => $data) {
 header('Set-Cookie: '.$cookie.'=1; '.$data[0].";", false);
}
header("Location: 301-1.php");
?>
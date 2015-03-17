<?php
include '302-8.php';
foreach ($cookies as $cookie => $data) {
 header('Set-Cookie: '.$cookie.'=1; Path='.$data, false);
}
if (isset($_GET["location"]))
 header("Location: ".$_GET["location"]);
else
 header("Location: 302-1.html");
?>
<?php
$logFile = $_GET['logfile'];
$fh = fopen($logFile, 'w');
fwrite($fh, "Content-Range \t\t  Bytes transferred\n");
fclose($fh);
?>
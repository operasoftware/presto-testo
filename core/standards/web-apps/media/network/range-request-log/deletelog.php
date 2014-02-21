<?php
sleep(200);
$logFile = $_GET['logfile'];
unlink($logFile);
?>
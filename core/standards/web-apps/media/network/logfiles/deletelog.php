<?php
$logFile = './'.str_replace('../', '', $_GET['logfile']);
unlink($logFile);
?>

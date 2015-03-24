<?php
header('Content-Type: application/x-ns-proxy-autoconfig');
echo 'function FindProxyForURL(url, host) { return "PROXY lingogi-builder:3128"; }';
?>
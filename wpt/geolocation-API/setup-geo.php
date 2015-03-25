<?php
/*
Copyright 2009 Opera Software ASA. All rights reserved.
 
This file contains Original Code and/or Contributions to the Original 
Code as defined in the Opera Web Applications License (the “License”). 
You may not use this file except in compliance with the License. Please 
obtain a copy of the License at http://www.opera.com/license/owal/
and read it before using this file. 

The Original Code and all Contributions to the Original Code distributed 
under the License are distributed on an “AS IS” basis, WITHOUT WARRANTY 
OF ANY KIND, EITHER EXPRESS OR IMPLIED, AND OPERA HEREBY DISCLAIMS ALL 
SUCH WARRANTIES, INCLUDING WITHOUT LIMITATION, ANY WARRANTIES OF 
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE OR NON-INFRINGEMENT. 

Please see the License for the specific language governing rights and 
limitations under the License. 
*/

date_default_timezone_set("Europe/Oslo");

/* Set to 1 to enable logging to geolog.log */
$debug = 0;

$ip=$_SERVER['REMOTE_ADDR'];
$geostatefilename = 'geostate.'.$ip.'.txt';

function sendheaders() {
  $now = date(DATE_RFC1123);
	header("Content-Type: text/plain",true);
	header("Date: ".$now);
	header("Expires: ".$now);
	header("Cache-Control: private, max-age=0");
	header("X-Content-Type-Options: nosniff");
	header("X-XSS-Protection: 0");
	header("Content-Length: 20");
	header("Server: GFE/2.0");
}

function geolog($message) {
	global $debug, $ip;
	if (!$debug) return;
	$f=fopen( "geolog.log" ,"a");
	fputs($f,date(DATE_W3C)." (".$ip."): ".$message."\n");
	fclose($f);
}

  // This is a GET, which we use to preset parameters to return when the next POST is called (this is so not REST...)

  @unlink($geostatefilename);

  geolog("SETUP: ".$_SERVER['QUERY_STRING']);


  $state_file = fopen($geostatefilename,'w');
  $paramsStart=strpos($_SERVER['QUERY_STRING'],"?");
  $params=substr($_SERVER['QUERY_STRING'],$paramsStart);
  fputs($state_file,urldecode($params));
  fclose($state_file);

  sendheaders();
  $output="// hello, ".$ip;
  printf($output);
  
  geolog("sent response: ".$output);
?>

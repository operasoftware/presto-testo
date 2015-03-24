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

$ip=$_SERVER['REMOTE_ADDR'];
$reqlogfilename = 'reqlog.'.$ip.'.txt';

if (file_exists($reqlogfilename)) {
	header("Content-Type: text/plain; charset=UTF-8");
	readfile($reqlogfilename);
} else {
	header("HTTP/1.0 204 No Content");
}

<?php
set_time_limit(.25);
define('SRC_URL', 'test.txt');
$strContext=stream_context_create(
    array(
      'http'=>array(
        'method'=>'GET',
        'header'=>"Accept-language: en\r\n"
      )
    )
  );
$fpOrigin=fopen(SRC_URL, 'rb', false, $strContext); 

if (isset($_GET['status'])) 
    header('HTTP/1.1 206 Partial Content');

header('content-type: text/plain');

if (isset($_GET['ranges']))
	header("Accept-Ranges: bytes");
while(!feof($fpOrigin)){
   $buffer=fread($fpOrigin, 4); 
  echo $buffer; 
  flush();  
}
fclose($fpOrigin);
?>
<?php
set_time_limit(0);
define('SRC_URL', '../../../../../../resources/media/webm/sunflower.webm');
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

header('content-type: video/webm');

if (isset($_GET['ranges']))
  header("Accept-Ranges: bytes");
while(!feof($fpOrigin)){
  $buffer=fread($fpOrigin, 4096);
  echo $buffer;
  flush();
  sleep(1); // Slow-down
}
fclose($fpOrigin);
?>

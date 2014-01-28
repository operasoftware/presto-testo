<?php 
// 404 if Accept-Encoding header is present, otherwide redirect
if(getenv('HTTP_ACCEPT_ENCODING'))
  header('HTTP/1.1 404 Not Found');
else
  header('Location: /resources/media/misc/2samples.wav');
?>

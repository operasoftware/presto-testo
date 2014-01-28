<?php
  // NOTE: This is an old broken version of range-request.php that is confused
  // about the interpretation of Range: bytes=x-y. Ranges should be inclusive,
  // not excluding the last byte. This script could be a starting point
  // for producing deliberately invalid responses in CORE-27748.
  function loadvideo($fileLocation, $maxSpeed = 50, $logFile = "logfile.txt")
  {
    $filesize = filesize($fileLocation);
    if ($filesize == 0 )
      die('Zero byte file! Aborting download');

    $range1 = 0;
    $length = $filesize-1;
    $range2 = $length;

    if (isset($_SERVER['HTTP_RANGE']))
    {
      preg_match('/bytes=(\d+)-(\d+)?/', $_SERVER['HTTP_RANGE'], $matches);
      $range1 = intval($matches[1]);
      $range2 = intval($matches[2]);

      if($range2 == 0)
        $range2 = $filesize-1;

      $length = $range2 - $range1;

      if (isset($_GET['etag']))
      {
        $content = floor(mktime()/30)*30;
        $etag = md5($content);
        header('ETag: '.$etag);
      }

      if (isset($_GET['cachecontrol']))
        header('Cache-Control: '.$_GET['cachecontrol']);

      if (isset($_GET['expires']))
      {
        header('Expires: '.gmdate('D, j M Y H:i:s T', time() + 200));
        header('Cache-Control: max-age=200, must-revalidate');
      }

      if(isset($_GET['lastmodified']))
      {
        $last_modified_time = filemtime($fileLocation);
        header("Last-Modified: ".gmdate("D, d M Y H:i:s", $last_modified_time)." GMT");
      }

      if (isset($_GET['status']))
        header('HTTP/1.1 '+$_GET['status']);
      else
        header('HTTP/1.1 206 Partial Content');

      header('Content-Type: video/ogg');

      if(!isset($_GET['chunked']))
        header('Content-Length: ' . $length);

      if (!isset($_GET['contentrange']))
        header('Content-Range: bytes ' . $range1 . '-' . $range2 . '/' . $filesize);

      if (!isset($_GET['acceptranges']))
        header('Accept-Ranges: bytes');
      else
        header('Accept-Ranges: none');

    }
    else
    {
      header('Content-Type: video/ogg');

      if (!isset($_GET['chunked']))
        header('Content-Length: ' . $filesize);

      if (isset($_GET['etag']))
      {
        $content = floor(mktime()/30)*30;
        $etag = md5($content);
        header('ETag: '.$etag);
      }
    }

    $fp = fopen("$fileLocation","rb");	// pointer to read from file
    fseek($fp,$range1);
    $tempfp = $range1;
    if ($length == 0 )
      die('Zero byte file! Aborting download');

    while (!feof($fp) and (connection_status()==0))
    {
      set_time_limit(0);
      ignore_user_abort(true);
      if($tempfp >= $range2)
        break;

      print(fread($fp,$maxSpeed));
      $tempfp = $maxSpeed + $tempfp;
      flush();
      ob_flush();
      sleep($sleep);
    }
    fclose($fp);
  }

  if (isset($_GET['fileloc']))
    $videolocation = $_GET['fileloc'];
  else
    $videolocation = '../../../../../../resources/media/xiph/theora_testsuite/320x240.ogg';
  if (isset($_GET['rate']))
    $rate = $_GET['rate'];
  else
    $rate = 1024;
  if (isset($_GET['logfile']))
    $log = $_GET['logfile'];
  else
    $log = 'logfile';
  if (isset($_GET['sleep']))
    $sleep = $_GET['sleep'];
  else
    $sleep = 0;

  loadvideo($videolocation, $rate, $log);
?>

<?php
$total=0;
$requests=0;
$myFile = $_GET['logfile'];
$fh = fopen($myFile, 'r');
if($_GET['fileloc'])
  $filesize = filesize($_GET['fileloc']);
else
  $filesize = filesize("video.ogg");
while(!feof($fh)){
  $theData = fgets($fh);
  if (preg_match("/[0-9]+$/", $theData, $matches))
    $total+=$matches[0];
  if(preg_match('/bytes=(\d+)-(\d+)?/', $theData, $matches))
    $requests++;
}
echo "Video file size : $filesize";
echo "<br/>";
echo "Total bytes transferred : $total";
echo "<br/>";
echo "Total range requests made : $requests";
fclose($fh);
?>

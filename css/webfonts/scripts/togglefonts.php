<?php
// -- file start --

// font 1 and font 2
$f1 = $_GET[ 'font1'];
$f2 = $_GET[ 'font2'];

$clientip = $_SERVER['REMOTE_ADDR'];

$storagefile = "temp/togglefonts_storage-".$clientip;

//printf($storagefile);
//exit();

if ( file_exists( $storagefile) && is_readable($storagefile) )
  $lastfont = file_get_contents($storagefile);
else
  $lastfont = "";
end;

if ($lastfont == $f1)
  $font = $f2;
else 
  $font = $f1;
end;

$fontfile = "../fonts/".$font;

readfile($fontfile);

$fh = fopen($storagefile, 'w');
fwrite($fh, $font);
fclose($fh);

//readfile($storagefile);

exit();

// -- file end -- 
?>

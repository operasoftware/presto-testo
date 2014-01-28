<?php
 function loadvideo($fileLocation,$maxSpeed = 100){
    $count = 0;
    if (connection_status()!=0) return(false);
    $range = 0;
    $size = filesize($fileLocation);
    header("Content-Type: video/ogg");
    header("Accept-Ranges: bytes");
    if(isset($_SERVER['HTTP_RANGE'])) {
        list($a, $range)=explode("=",$_SERVER['HTTP_RANGE']);
        str_replace($range, "-", $range);
        $size2=$size-1;
        $new_length=$size-$range;
        header("HTTP/1.1 206 Partial Content");
        header("Content-Length: $new_length");
        header("Content-Range: bytes $range$size2/$size");
   } else {
        $size2=$size-1;
        header("Content-Range: bytes 0-$size2/$size");
        header("Content-Length: ".$size);
    }
    if ($size == 0 ) { die('Zero byte file! Aborting download');}
    set_magic_quotes_runtime(0);
    $fp=fopen("$fileLocation","rb");
    fseek($fp,$range);
    while(!feof($fp) and (connection_status()==0))
    {
        set_time_limit(0);
        ignore_user_abort(true);
        $temp = fread($fp,1*$maxSpeed);
        $count++;
        print($temp);
        flush();
        ob_flush();
        if($count > 20000)
        {
            sleep(10);
        }
        else
        {
           sleep(0);
        }
    }
    fclose($fp);
    return((connection_status()==0) and !connection_aborted());
}
loadvideo('../../../../../../../resources/media/misc/bbb_256kbps.ogg');
?>

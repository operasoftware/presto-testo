<?php
 function loadvideo($fileLocation,$maxSpeed = 50, $logFile = "logfile.txt"){
    sleep(1);
     $filesize = filesize($fileLocation);
     if ($filesize == 0 ) { die('Zero byte file! Aborting download');}
     $range1 = 0;
    $length = $filesize-1;
    $range2 = $length;
    $fh = fopen($logFile, 'a'); // pointer to write to the file
    $count = 0;
         
     if(isset($_SERVER['HTTP_RANGE'])) {
	        preg_match('/bytes=(\d+)-(\d+)?/', $_SERVER['HTTP_RANGE'], $matches);
	        $range1 = intval($matches[1]);
	        $range2 = intval($matches[2]);
	        if($range2 == 0)
		      $range2 = $filesize-1;
	        $length = $range2 - $range1 + 1;
	        if (isset($_GET['status'])) {
		        header('HTTP/1.1 '+$_GET['status']);
	        } else {
		        header('HTTP/1.1 206 Partial Content');
	        }
	        header('Content-Type: video/ogg');
            if(!isset($_GET['chunked'])) {
	            header('Content-Length: ' . $length);
            }
	        if (!isset($_GET['contentrange'])) {
		        header('Content-Range: bytes ' . $range1 . '-' . $range2 . '/' . $filesize);
            }
            if (!isset($_GET['acceptranges'])) {
                header('Accept-Ranges: bytes');
            }else{
                header('Accept-Ranges: none');
            }
            fwrite($fh,"\n");
	        fwrite($fh, $_SERVER['HTTP_RANGE']);
	        fwrite($fh, "\t\t\t");
	} else {
            header('Content-Type: video/ogg');
	       if(!isset($_GET['chunked']))
                header('Content-Length: ' . $filesize);
        }
     
    $fp=fopen("$fileLocation","rb");	// pointer to read from file
    fseek($fp,$range1);
    $tempfp = $range1;
    if ($length == 0 ) {
        fwrite($fh, $length); 
        fwrite($fh, "\n");
        die('Zero byte file! Aborting download');
    }
    while(!feof($fp) and (connection_status()==0))
    {
        set_time_limit(0);
	    ignore_user_abort(true);
	    if($tempfp > $range2)
    		break;
        print(fread($fp,$maxSpeed));
    	$tempfp = $maxSpeed + $tempfp;
    	$count ++;
        flush();
        ob_flush();
    	sleep(0);
    }
   
    fwrite($fh, $count*$maxSpeed); 
    fwrite($fh, "\n");
    fclose($fh);
    fclose($fp);
 }
 $videolocation = $_GET['fileloc'];
 $rate = $_GET['rate'];
 $log = $_GET['logfile'];
loadvideo($videolocation,$rate,$log);
?>
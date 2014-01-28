<?php

/*
* sleep a given amount of time before redirecting to specified resource
* arguments: time, url
*/

$count=0;
if( isset( $_GET['time'] ) ){
	while($count<$_GET['time']){
		sleep( 1 );
		// flush(); # now causes "can not modify header information" :-(
		$count++;
	}
}

if( isset( $_GET['url'] ) ){
	header( 'Location: '. $_GET['url'] );
}


?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN">
<html><head>
	<title> delayed page with redirect </title>
</head>
<body>

	<p>Sleep a given amount of time before redirecting to specified resource. Accepted query string arguments: time, url</p>

</body></html>


<!DOCTYPE html>

<title>DSK-375732 - http one dynamic (appended with JS) anchor element and meta tag forcing prefetching OFF</title>
<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
<style>
	img{
		width:16px;
		height:16px;
	}
	
	#messages{
		position:absolute;
		bottom:10px;
		height:30%;
		overflow:auto;
	}
</style>

<script src="res/test.js"></script>
<script>setProtocol(false);</script>
<body>
<?php 
	$prefix = preg_replace("/\.|:/","x",$_SERVER['REMOTE_ADDR']);
		$address = array($prefix.'code'.rand(0,1000000).'.prefetch.osa');
		echo '<meta http-equiv="x-dns-prefetch-control" content="off">';
		echo '<script>createButton('.json_encode($address).');</script>';
		echo '<script>check_dns('.json_encode($address).',0);</script>';
?>
<div id="messages"></div>
</body>

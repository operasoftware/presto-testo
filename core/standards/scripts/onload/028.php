<?php
	$count = isset( $_GET['count'] ) && is_numeric( $_GET['count'] ) ? $_GET['count'] : 300;
?>
<!DOCTYPE html>
<html><head>
	<title>  Load event performance test (IFRAME)  </title>
	<style type="text/css">
		iframe{width: 50px;height: 50px}
	</style>
</head>
<body>

	<p>FAILED (This TC requires JavaScript enabled)</p>

	<script type="text/javascript">
	var count=<?php echo $count ?>;
	var pageStart=(new Date()).getTime(); // before parsing all that stuff..
	var start;
	function completed(){
		var log=document.getElementsByTagName('p')[0].firstChild;
		var duration=(new Date()).getTime()-start;
		var beforeFirstEvent=start - pageStart;
		log.data='Sent '+count+' load events to iframes in '+duration+'ms (initial load/parse time '+beforeFirstEvent+')';
		try{top.opener.rr(duration, beforeFirstEvent);}catch(e){}
	}
	function iframe_load_handler(num){
		if(!start)start=(new Date()).getTime();
		if( num === count )completed();
	}
	</script>
	<?php
		for($i=1; $i<=$count; $i++) echo '<iframe src="data:text/html,<html style=\'background: #006; color: #fff\'><body><p>'.$i.'</p></body></html>" onload="iframe_load_handler('.$i.')"></iframe>';
	?>

</body></html>

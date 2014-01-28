<?php
	$count = isset( $_GET['count'] ) && is_numeric( $_GET['count'] ) ? $_GET['count'] : 10000;
?>
<!DOCTYPE html>
<html><head>
	<title>  Load event performance test (IMG+png)  </title>
	<style type="text/css">
		img{width: 50px;height: 50px}
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
		log.data='Sent '+count+' load events to PNG images in '+duration+'ms (initial load time '+beforeFirstEvent+')';
		try{top.opener.rr(duration);}catch(e){}
	}
	function iframe_load_handler(num){
		if(!start)start=(new Date()).getTime();
		if( num === count )completed();
	}
	</script>
	<?php
		for($i=1; $i<=$count; $i++) echo '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAIAAAACDbGyAAAAI0lEQVR4nGNkYNjCgARYGBgY/v/3hnAYGbcyMaACdD4jmn4A7CkEc/PaWSMAAAAASUVORK5CYII=" onload="iframe_load_handler('.$i.')">';
	?>

</body></html>


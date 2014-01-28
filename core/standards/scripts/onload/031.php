<?php
	$count = isset( $_GET['count'] ) && is_numeric( $_GET['count'] ) ? $_GET['count'] : 300;
?>
<!DOCTYPE html>
<html><head>
	<title>  Load event performance test (IFRAME - innerHTML edition)  </title>
	<style type="text/css">
		iframe{width: 50px;height: 50px}
	</style>
</head>
<body>

	<p>FAILED (This TC requires JavaScript enabled)</p>

	<script type="text/javascript">
	var count=<?php echo $count ?>;
	var start;
	function completed(){
		var log=document.getElementsByTagName('p')[0].firstChild;
		var duration=(new Date()).getTime()-start;
		var beforeFirstEvent=start - pageStart;
		log.data='Sent '+eventCount+' load events to iframes in '+duration+'ms (initial load time '+beforeFirstEvent+')';
		try{top.opener.rr(duration, beforeFirstEvent);}catch(e){}
	}
	var eventCount=0;
	function iframe_load_handler(num, fromContentDocument){
		if(!start)start=(new Date()).getTime();
		eventCount++;
		if( eventCount === (count*2) )completed();
	}
	/* an implementation might start firing onload events to the first elements while still parsing.
	This would be a good optimisation, but if we measure time from first to last onload event fired,
	such an implementation would look worse.. We try to minimise this effect by setting innerHTML
	instead of having the IFRAMEs created during normal parsing.
	*/
	var markup= "<?php
		for($i=1; $i<=$count; $i++) echo str_replace( '"' , '\"', '<iframe src="data:text/html,<html style=\'background: #006; color: #fff\'><body onload=&quot;parent.iframe_load_handler('.$i.', true)&quot;><p>'.$i.'</p></body></html>" onload="iframe_load_handler('.$i.')"></iframe>');
	?>";
	var div=document.createElement('div');
	document.body.appendChild(div);
	var pageStart=(new Date()).getTime(); // before parsing all that stuff..
	div.innerHTML=markup;
	</script>

</body></html>
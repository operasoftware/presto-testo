<?php
/*
* Goes through a folder with subfolders and builds .html files from .js files
*
* - the main point of this is to easily achieve both plain .js files for use with a js shell and standalone HTML files to use with SPARTAN. This file basically just wraps any standalone .js files in a HTML template, extracting the /** title * / to place it in  <title></title> along the way.
*/

$template = ' <!DOCTYPE html>
<html><head>
	<title> [title] </title>
	<script type="text/javascript" src="../_files/common.js"></script>
	<script type="text/javascript" src="[url]"></script>
</head>
<body>
	<p>FAILED (This TC requires JavaScript enabled)</p>
	<script type="text/javascript">
	try{report(test());}catch(e){report(\'Exception during test: \'+e);}
	</script>
</body></html>';

$dirs = array( 'API', 'correctness', 'error_handling', 'integrity', 'performance', 'integration' );
$file_extension='.js';
foreach($dirs as $dir ){
	$category = $dir;
	$dir = '../'.$dir;
	$d = dir($dir.'/scripts');
	while($entry=$d->read()) {
		if( $file_extension && substr( $entry, -(strlen($file_extension)))!=$file_extension) continue;
		$relative_url = 'scripts/'.$entry;
		$code = join( '', file( $dir.'/'.$relative_url ) );
		if( preg_match( "/\/\*\*(.*)\*\//", $code, $matches  ) ){
			$test_title=$matches[1];
		}else{
			$test_title=$relative_url;
		}
		$html = str_replace( '[url]', $relative_url, $template );
		$html = str_replace( '[title]', $category.': '.$test_title, $html );
		$filename = str_replace( '.js', '.html', $entry );
		$f=fopen( $dir.'/'.$filename, 'w' );fwrite($f, $html); fclose($f);
		echo $dir.'/'.$filename."\n".$html."\n\n";
	}
	$d->close();
}
?>

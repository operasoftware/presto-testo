<?php
/* upload test
 receives a file, outputs its name and information about it for download
*/
header('Content-type: text/html; charset=UTF-8');
if(isset($_POST['removefiles'])){
	foreach (glob("uploads/*.*") as $filename) {
	  unlink($filename);
	}
}

if(  isset( $_FILES['file'] ) ){
	$name=$_FILES['file']['name'];
	// some browsers include path when uploading
	$filename=strrchr($name, '\\'); 
	if( ! $filename ) $filename=strrchr($name, '/'); 
	if( ! $filename )  $filename=$name;
	
	$tmp=$_FILES['file']['tmp_name'];
	$size=$_FILES['file']['size'];
	$type=$_FILES['file']['type'];
	
	$instructions='<h1>File information</h1><table><tr><th>Name</th><th>Size</th><th>Type</th></tr>
	<tr><td>'.$name.'</td><td>'.$size.'</td><td>'.$type.'</td></tr>
	</table>';
	
	if( move_uploaded_file ( $tmp, './uploads/'.$filename ) ){
		$instructions.='<p><a href="uploads/'.$filename.'">Click here to download file again</a></p>';
	}
	
}else{
	$instructions='<p>Please select a file and upload it</p>';
}
$html='';
foreach (glob("uploads/*.*") as $filename) {
  $html.='<li><a href="./'.$filename.'">'.$filename.'</a></li>';
}
if($html){
	$instructions='<h1>Existing files</h1><ul>'.$html.'</ul>'.$instructions;
}

?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN">
<html><head>
	<title> File upload test case </title>
	<style type="text/css">td,th{ border: 1px solid black  }</style>
</head>
<body>

	<?php
		echo $instructions;
	?>
	
	<form action="" method="post" enctype="multipart/form-data">
		<input type="file" name="file"><input type="submit">
	</form>
	<p>Try some or all of the following:</p>
	<ul>
		<li>Upload an image</li>
		<li>Open the uploaded image to check it is not corrupted</li>
		<li>Upload a video</li>
		<li>Upload a file with a Japanese name</li>
		<li>Test downloading files with Opera on a PC to check that it is OK</li>
               <li>Upload a file with a non BMP name (i.e. one containing characters with codepoints greater than U+FFFF e.g. copy the following into the filename 𝐓𝔢𝕊𝚻🀰𐂗)
	</ul>
	
	<form action="" method="post"><p>When finished testing, please <button name="removefiles">delete uploaded files</button></p></form>
</body></html>




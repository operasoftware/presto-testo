<?php
/*
* Goes through a folder with subfolders and builds a file list.
*/

header('Content-type: application/x-javascript');

$dir= isset($_GET['dir']) ? './'.str_replace('../', '', $_GET['dir']) : '.';
$file_extension=(isset($_GET['ext'])?$_GET['ext']:''); //echo "//listing files starting with $file_extension \n";
set_time_limit(120);
$urlprefix=str_replace( strrchr( $_SERVER['SCRIPT_NAME'], '/'), '', $_SERVER['SCRIPT_NAME']);

$files=getFiles($dir, $file_extension);
sort($files);

echo '
if(typeof fileArray == "undefined" || fileArray.length==0){
	var fileArray = ["'.join("\",\n\"", $files).'"];
}else{
	fileArray = fileArray.concat( ["'.join("\",\n\"", $files).'"] );
}';


function getFiles($dir, $file_extension){ //echo $dir;
	$result = array();
	$excludeFilesArray = array("_files", "runner.htm","fileArray.php" );

	$d = dir($dir);
	while($entry=$d->read()) {
		if(in_array($entry, $excludeFilesArray) || substr( $entry,0,1 )=='.' )continue;
		if(is_dir($dir.'/'.$entry)){
			$result=array_merge($result, getFiles($dir.'/'.$entry, $file_extension));
		}else{
			if( ! in_array($entry, $excludeFilesArray) &&  substr_count($entry, '-')==0 ){
				if( $file_extension && substr( $entry, -(strlen($file_extension)))!=$file_extension) continue;
				$result[]=$GLOBALS['urlprefix'].'/'.(substr($dir, 0, 2)=='./' ? substr($dir, 2) : $dir ).'/'.$entry;
			}
		}
	}
	$d->close();
	return $result;
}

?>

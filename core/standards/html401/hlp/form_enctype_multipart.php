<?php
$ct = $_SERVER["CONTENT_TYPE"];
$et = "multipart/form-data";

#echo $ct;
#echo strpos($ct,$et);

if(strpos($ct,"multipart/form-data")===0){
 echo "PASS";
}
else{
 echo "FAIL";
}

?>
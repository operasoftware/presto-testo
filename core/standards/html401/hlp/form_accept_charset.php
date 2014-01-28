<?php
$ct = $_SERVER["CONTENT_TYPE"];
$et = "multipart/form-data";

#echo $ct;
#echo strpos($ct,$et);

if(strpos($ct,"application/x-www-form-urlencoded; charset=iso-8859-5")===0){
 echo "PASS";
}
else{
 echo "FAIL";
}

?>
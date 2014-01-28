<?php
session_start();
if( $_POST['test_incomplete']=='true'){
	// we're doing a test that includes reloading something
	// wait for the next POST before saving data
	if( isset( $_SESSION['partial_data'] ) ){
		$_SESSION['partial_data'] .= $_POST['data'];
	}else{
		$_SESSION['partial_data'] = $_POST['data'];
	}
}else if(  isset( $_SESSION['partial_data'] ) && ! empty($_SESSION['partial_data'])  ){
	// we have an incomplete data set already. This SHOULD be the final post in the series, so let's save it..
	saveToDatabase( $_POST['test'], $_SERVER['HTTP_USER_AGENT'], $_SESSION['partial_data']. $_POST['data'], $_POST['passed_test']  );
	$_SESSION['partial_data']='';
}else{
	saveToDatabase( $_POST['test'], $_SERVER['HTTP_USER_AGENT'], $_POST['data'], $_POST['passed_test'] );
}


function saveToDatabase( $test, $ua, $data, $passed_test ){ //echo 'saving '.$test.' '.$ua.' '.$data;
	$link = mysql_connect( 'localhost', 'root', '' );
	mysql_select_db('test_stats');
	$ua=mysql_escape_string($ua);
	$test=mysql_escape_string($test);
	$passed_test=mysql_escape_string($passed_test);
	$data=mysql_escape_string($data);
	$query = mysql_query( 'SELECT * FROM load_events WHERE UA LIKE "'.$ua.'" AND test LIKE "'.$test.'"' );
	if( mysql_num_rows( $query)==0 ){
		$sql= 'INSERT INTO load_events (UA, test, data, passed_test) VALUES ( "'.$ua .'", "'.$test.'", "'.$data.'", "'.$passed_test.'"  )' ;
	}else{
		$sql= 'UPDATE load_events  SET UA="'.$ua .'", test="'.$test.'", data="'.$data.'", passed_test="'.$passed_test.'" WHERE test LIKE "'.$test.'" AND UA LIKE "'.$ua.'" LIMIT 1' ;
	}
	mysql_query($sql);
	echo "$sql\n\n";
	echo mysql_error();
}

?>
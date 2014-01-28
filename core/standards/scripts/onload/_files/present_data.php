<?php

$link = mysql_connect( 'localhost', 'root', '' );
mysql_select_db('test_stats');
$q=mysql_query( 'SELECT * FROM load_events ORDER BY test, UA' );
$known_uas=array();
$all_test_data=array();
while( $row=mysql_fetch_array($q)  ){
	if(! isset( $all_test_data[$row['test']] ) ) $all_test_data[$row['test']] = array();
	if(! isset( $all_test_data[$row['test']][$row['UA']] ) ) $all_test_data[$row['test']][$row['UA']] = array();
	$all_test_data[$row['test']][$row['UA']]['data'] = $row['data'];
	$all_test_data[$row['test']][$row['UA']]['passed_test'] = $row['passed_test'];
	if( ! in_array($row['UA'], $known_uas) )$known_uas[]=$row['UA'];
}

$tablecells=array();
foreach( $all_test_data as $test=>$results ){
	$table_index = count( $tablecells );
	$tablecells[$table_index]='<th><a href="../'.str_pad($test, 3, '0', STR_PAD_LEFT).'.html">'.$test.'</a></th>';
	foreach( $known_uas as $thisua ){
		$tablecells[$table_index].='<td';
		$tablecells[$table_index].= ' class="'.str_replace(' ', '_', $results[$thisua]['passed_test']).'"' ;
		$tablecells[$table_index].=">[\n\t\t\t'".str_replace("\n", "',\n\t\t\t'", htmlentities($results[$thisua]['data']))."'\n\t\t]</td>";
	}
}
$header_row='<th>Test</th>';
foreach( $known_uas as $thisua ){
	$header_row.='<th>'.$thisua.'</th>';
}

echo '<!DOCTYPE html><html><head><title>Load event test results</title><link href="present_data.css" rel="stylesheet" type="text/css"></head>
<body>

	<table border="1">
		<tr>'.$header_row.'</tr>
		<tr>'.implode("</tr>\n\t\t<tr>", $tablecells).'</tr>
	</table>

<script src="present_data.js"></script>
</body>
</html>';
?>
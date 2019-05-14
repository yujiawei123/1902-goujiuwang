<?php  
	
	include "conn123.php";
	
	$id=$_GET['sid'];
	
	$result=mysql_query("select * from maotaijiu where picid=$id ");
	
	$wronglist=mysql_fetch_array($result,MYSQL_ASSOC);
	
	echo json_encode($wronglist);

?>
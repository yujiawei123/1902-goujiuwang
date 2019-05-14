<?php  
	
	include "conn123.php";

	$result=mysql_query("select * from maotaijiu limit 3");
	
	$wronglist=array();
	for ($i=0; $i < mysql_num_rows($result); $i++) { 
		$wronglist[$i]=mysql_fetch_array($result,MYSQL_ASSOC);
	}

	echo json_encode($wronglist);
	

?>
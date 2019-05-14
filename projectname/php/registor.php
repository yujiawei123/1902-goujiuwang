<?php
	// include "http://10.31.163.77/goujiuwang/php/conn.php";//引入数据库连接的文件
	require "conn.php";
	
	//1.获取前端传来的做唯一匹配的值
	//判断是否传过来了
	//isset($_POST['submit']):为了提交表单数据到数据同时做检测.
	if(isset($_POST['tel']) || isset($_POST['submit'])){
		echo 
		$tel=@$_POST['tel'];
	}else{

		exit('非法操作');
	}
	
	
	
	$query="select * from user where tel='$tel'";
	$result=mysql_query($query);
	
	if(mysql_fetch_array($result)){//如果有值代表用户名存在。
		echo 'false';//有重复
	}else{
		echo 'true';//没有重复
	}
	
	//2.如果单击注册按钮,按钮的值为注册,将表单的值添加的数据库.
	echo "1";
	if(isset($_POST['submit'])){
		echo "1";
		$tel=$_POST['tel'];//username：表单的名称
		$pass=md5($_POST['password']);
		$repass=$_POST['repass'];
	
		//添加语句
		$query="insert user(sid,tel,password,repass,regdate) values(null,'$tel','$pass','$repass',NOW())";
		mysql_query($query);
		header('location:http://10.31.163.77/projectname/login.html');//页面的跳转
	}
?>
<?php
	require 'config.php';

	$response = array();

	$query = "select * from users where username = '".$_POST['username']."' and password = '".$_POST['password']."' limit 1 ";

	$result = mysql_query($query);

	if(mysql_num_rows($result) == 1){
		while ($r = mysql_fetch_assoc($result)) {
			$response['userDetails'] = $r;
			$response['flag'] = 1;
		}
	}else{
		$response['flag'] = 0;
		$response['msg'] = "Invalid Username/Password";
	}

	echo json_encode($response);

?>
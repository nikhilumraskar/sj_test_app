<?php

	require '../config.php';

	$response = array();

	$result = mysql_query("select user_role from users where id = '".$_POST['userid']."' limit 1");

	$user_type = mysql_fetch_assoc($result);

	if($user_type['user_role'] == 'user'){
		$query = "select * from contact_us_table where user_id = '".$_POST['userid']."'";
	} else if($user_type['user_role'] == 'admin'){
		$query = "SELECT contact_us_table.*, users.username FROM `contact_us_table` inner join users on contact_us_table.user_id = users.id order by contact_us_table.contact_id DESC";
	}

	$result = mysql_query($query);

	while ($r = mysql_fetch_assoc($result)) {
		array_push($response, $r);
	}
	
	echo json_encode($response);

?>
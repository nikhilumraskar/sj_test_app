<?php  

	require 'config.php';

	$response = array();

	$query = "select * FROM users where user_role = 'user'";

	$result = mysql_query($query);

	while ($r = mysql_fetch_assoc($result)) {
		array_push($response, $r);
	}

	echo json_encode($response);

?>
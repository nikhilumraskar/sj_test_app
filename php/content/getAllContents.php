<?php  

	require '../config.php';

	$response = array();

	if($_POST['user_type'] == 'admin')
		$query = "select * FROM content"; //please dont forget to add scedule date
	else {
		$query = "select * FROM content where schedule_date < '".date('Y-m-d')."'"; 
	}
	$result = mysql_query($query);

	while ($r = mysql_fetch_assoc($result)) {
		array_push($response, $r);
	}

	echo json_encode($response);

?>
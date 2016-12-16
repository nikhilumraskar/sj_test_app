<?php  

	require '../config.php';

	$response = array();

	$query = "select content_comments.id,content_comments.content_id, content_comments.comment_text, users.id as userid,users.username from content_comments inner join users on content_comments.user_id = users.id where content_id = '".$_POST['contentid']."' ORDER BY id";

	$result = mysql_query($query);

	while ($r = mysql_fetch_assoc($result)) {
		array_push($response, $r);
	}

	echo json_encode($response);

?>
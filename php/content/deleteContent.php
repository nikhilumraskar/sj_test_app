<?php

	require '../config.php';

	//dont forget to delete all comments in that content

	$deleteCommentsQuery = "delete from content_comments where content_id = '".$_POST['contentid']."'";

	mysql_query($deleteCommentsQuery);

	$deleteContent = "delete from content where content_id = '".$_POST['contentid']."'";

	mysql_query($deleteContent);

	echo 1;

?>

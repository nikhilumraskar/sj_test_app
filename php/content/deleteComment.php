<?php

	require '../config.php';

	echo $deleteCommentQuery = "delete from content_comments where id = '".$_POST['commentid']."'";

	mysql_query($deleteCommentQuery);

	echo 1;

?>

<?php

	require '../config.php';

	mysql_query("INSERT INTO contact_us_table (user_id, title, query_text, reply_flag) VALUES ('".$_POST['userid']."','".$_POST['title']."','".$_POST['queryText']."',0)");

	echo 1;

?>
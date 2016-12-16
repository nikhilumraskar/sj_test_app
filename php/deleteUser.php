<?php

	require 'config.php';

	//print_r($_POST);

	mysql_query("delete from content_comments where user_id = '".$_POST['id']."'");

	mysql_query("delete from users where id = '".$_POST['id']."'");

?>

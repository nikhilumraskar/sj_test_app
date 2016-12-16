<?php

	require 'config.php';

	//print_r($_POST);

  mysql_query("insert into users (username, password, user_role) values('".$_POST['username']."', '".$_POST['password']."', 'user')");

  echo 1;

?>

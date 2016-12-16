<?php

	require '../config.php';

	mysql_query("UPDATE contact_us_table SET  reply_text = '".$_POST['reply']."', reply_flag = 1 WHERE  contact_id = '".$_POST['contactid']."'");

	echo 1;

?>
<?php 

	require '../config.php';

	mysql_query("insert into content (content_title, schedule_date, content_page_1, content_page_2, content_page_3 ) values('".$_POST['row']['content_title']."', '".$_POST['row']['schedule_date']."', '".$_POST['row']['content_page_1']."','".$_POST['row']['content_page_2']."','".$_POST['row']['content_page_3']."')");

	echo 1;

?>
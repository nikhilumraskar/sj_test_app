<?php

	require '../config.php';
	
	mysql_query("update content set content_title = '".$_POST['row']['content_title']."', schedule_date = '".$_POST['row']['schedule_date']."', content_page_1 = '".$_POST['row']['content_page_1']."',content_page_2 = '".$_POST['row']['content_page_2']."', content_page_3 = '".$_POST['row']['content_page_3']."' WHERE content_id = '".$_POST['row']['content_id']."'");

	echo 1;

?>

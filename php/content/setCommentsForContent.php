<?php

	require '../config.php';

	session_start();

	$flag = 0;

	$query = '';

	$result = mysql_query("select user_role from users where id = '".$_POST['userid']."' limit 1");

	$user_type = mysql_fetch_assoc($result);

	if($user_type['user_role'] == 'user'|| $user_type['user_role'] == 'admin'){
		$query = "insert into content_comments (content_id, user_id, comment_text) values('".$_POST['contentid']."', '".$_POST['userid']."', '".$_POST['usercomment']."')";
		$flag = 1;
	}
	else if($user_type['user_role'] == 'anonymous'){
		if(isset($_SESSION['captcha_code'])){
			if($_SESSION['captcha_code'] == $_POST['captcha']){
				$query = "insert into content_comments (content_id, user_id, comment_text) values('".$_POST['contentid']."', '".$_POST['userid']."', '".$_POST['usercomment']."')";
				$flag = 1;
			}
			else {
				$flag = 0;
			}
		}
	}

	if($flag == 1)
		mysql_query($query);

	session_destroy();

	echo $flag;

?>

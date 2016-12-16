<?php 
    session_start();

    $md5_hash = md5(rand(0,999)); 
    $captcha_code = substr($md5_hash, 0, 5); 

    $_SESSION["captcha_code"] = $captcha_code;

    $width = 100; 
    $height = 40; 

    $image = ImageCreate($width, $height);  

    $white = ImageColorAllocate($image, 255, 255, 255); 
    $black = ImageColorAllocate($image, 0, 0, 0); 

    ImageFill($image, 0, 0, $white); //white bg

    ImageString($image, 4, 20, 10, $captcha_code, $black); //black text
 
    header("Content-Type: image/jpeg"); 

    ImageJpeg($image); 
    
    ImageDestroy($image); 
?>
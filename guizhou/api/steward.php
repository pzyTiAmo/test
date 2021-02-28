<?php

//链接数据库
$con = mysqli_connect('www2021.com','pzy','123456','pzy');

//传递参数
$username = $_GET['username'];
$password = $_GET['password'];

//在数据库查找用户名和密码
$sql = "SELECT * FROM `test` WHERE `username` = '$username' AND `password` = '$password'";

$res = mysqli_query($con,$sql);

if(!$res){
    die('error for mysqli:' . mysqli_fetch_assoc());
}

$row = mysqli_fetch_assoc($res);

if(!$row){
    //没有匹配的数据 登录失败
    echo json_encode(array(
        "code" => 0,
        "message" => "登录失败"
    ));
} else {
    echo json_encode(array(
        "code" => 1,
        "message" => "登录成功"
    ));
}

?>
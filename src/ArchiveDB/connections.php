<?php
 header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
    header('Content-type: application/json');
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");    
    header('Access-Control-Allow-Credentials: true');
$host = "127.0.0.1";
$user = "root";
$password = "";
$database = "archive_app_db";
//$database = "qubulat_db";
$connect = mysqli_connect($host, $user, $password, $database);
$connect->set_charset("utf8");
if (mysqli_connect_errno()) {
    die("no");
} 
?>
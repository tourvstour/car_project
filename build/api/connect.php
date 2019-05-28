<?php
header("Access-Control-Allow-Origin: *");
//เชื่อมต่อฐานข้อมูลแบบPDO(postgres SQL)
$host = "192.168.101.240";
$port = "5432";
$db = "car";
$user = "admin";
$pass = "samroiyod";
try {
    $connect = new PDO("pgsql:host=$host;port=$port;dbname=$db;user=$user;password=$pass");
} catch (PDOException $e) {
    echo $e->getMessage();
}

<?php
$connection = new PDO("mysql:host=localhost;dbname=utilisateurs", "root", "");

$query = "SELECT * FROM utilisateurs";
$statement = $connection->prepare($query);
$statement->execute();

$users =$statement->fetchall();

$usersJson = json_encode($users);

header('Content-Type: application/json');
echo $usersJson;

?>
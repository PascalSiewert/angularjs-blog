<?php

require_once 'settings.php';

$dsn = DB_DRIVER.':host='.DB_HOST.';dbname='.DB_NAME;
$pdo = new PDO($dsn, DB_USER, DB_PASSWORD);

if(isset($_GET['postId'])) {
  $stmt = $pdo->prepare('SELECT p_id, title, content, u.username, created_at FROM post AS p JOIN user AS u ON p.author = u.u_id WHERE p_id = ?');
  $stmt->bindParam(1, $_GET['postId'], PDO::PARAM_INT);
}
else {
  $stmt = $pdo->query('SELECT p_id, title, content, u.username, created_at FROM post AS p JOIN user AS u ON p.author = u.u_id');
}

$stmt->execute();
header('Content-type: application/json');

echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));

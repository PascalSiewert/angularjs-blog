<?php

require_once 'settings.php';

$dsn = DB_DRIVER.':host='.DB_HOST.';dbname='.DB_NAME;
$pdo = new PDO($dsn, DB_USER, DB_PASSWORD);

$stmt = $pdo->prepare('SELECT title, content, u.username, created_at FROM post AS p JOIN user AS u ON p.author = u.u_id ORDER BY created_at DESC');
$stmt->execute();
header('Content-type: application/json');

echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));

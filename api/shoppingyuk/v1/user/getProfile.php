<?php
include '../db.php';

$data = json_decode(file_get_contents("php://input"), true);

$pdo = connectDB();
?>
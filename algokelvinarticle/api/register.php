<?php

// Connect DB phpmyadmin
// Set up the response format to return JSON
header('Content-Type: application/json');

// Database credentials
$host = 'localhost'; // Your MySQL host (usually localhost)
$dbname = 'algokelvin_cocipta_db'; // Database name
$username = 'root'; // Your MySQL username
$password = ''; // Your MySQL password (leave empty for default)

// Connect to the database using PDO
try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); // Set the PDO error mode to exception
    echo"DB Konek";
} catch (PDOException $e) {
    echo json_encode(['status' => 'error', 'message' => 'Database connection failed: ' . $e->getMessage()]);
    exit;
}

echo 'Jalan 1';

$data = json_decode(file_get_contents("php://input"), true);
$nameUser = $data["name_user"] ?? '';
$emailUser = $data['email_user'] ??'';
$username = $data["username"] ?? '';
$password = password_hash($data['password'], PASSWORD_DEFAULT);
$phoneNumber = $data['phone_number'] ?? '';
$gender = $data['gender'] ?? '';
$dateBirth = $data['date_birth'] ?? '';
$address = $data['address'] ?? '';
$created_at = date('Y-m-d');
$updated_at = date('Y-m-d');
$created_by = 1;
$updated_by = 1;

echo 'Jalan 2';

$query = "INSERT INTO ac_user(
    `name_user`, 
    `email_user`, 
    `username`, 
    `password`, 
    `phone_number`, 
    `gender`, 
    `date_birth`, 
    `address`, 
    `created_at`, 
    `updated_at`, 
    `created_by`, 
    `updated_by`
) VALUES (
    :name_user,
    :email_user,
    :username,
    :password,
    :phone_number,
    :gender,
    :date_birth,
    :address,
    :created_at,
    :updated_at,
    :created_by,
    :updated_by
)";

$stmt = $pdo->prepare($query);
$stmt->bindParam(':name_user', $nameUser);
$stmt->bindParam(':email_user', $emailUser);
$stmt->bindParam(':username', $username);
$stmt->bindParam(':password', $password);
$stmt->bindParam(':phone_number', $phoneNumber);
$stmt->bindParam(':gender', $gender);
$stmt->bindParam(':date_birth', $dateBirth);
$stmt->bindParam(':address', $address);
$stmt->bindParam(':created_at', $created_at);
$stmt->bindParam(':updated_at', $updated_at);
$stmt->bindParam(':created_by', $created_by);
$stmt->bindParam(':updated_by', $updated_by);
$stmt->execute();

echo 'Jalan 3';

?>
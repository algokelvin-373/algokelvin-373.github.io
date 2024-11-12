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
    // Set the PDO error mode to exception
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Success Connect DB";
} catch (PDOException $e) {
    echo json_encode(['status' => 'error', 'message' => 'Database connection failed: ' . $e->getMessage()]);
    exit;
}

// Prepare the SQL statement to check the username

$username = 'admin1';

$query = "SELECT * FROM ac_user WHERE username = :username";
$stmt = $pdo->prepare($query);
$stmt->bindParam(':username', $username);
$stmt->execute();

// Check if the user exists
$user = $stmt->fetch(PDO::FETCH_ASSOC);

if ($user) {
    echo "Username: " . $user['username'] . "<br>";
} else {
    echo "User not found.";
}

// $validUsername = "admin@gmail.com";
// $validPassword = "password";

// $data = json_decode(file_get_contents("php://input"), true);

// if ($data) {
//     $username = $data["username"] ?? '';
//     $password = $data["password"] ?? '';

//     if ($username === $validUsername && $password === $validPassword) {
//         echo json_encode([
//             "status" => "success",
//             "message"=> "Login successful!"
//         ]);
//     } else {
//         echo json_encode([
//             "status" => "error",
//             "message"=> "Invalid username or password"
//         ]);
//     }
// } else {
//     echo json_encode([
//         "status" => "error",
//         "message"=> "Invalid request"
//     ]);
// }

?>
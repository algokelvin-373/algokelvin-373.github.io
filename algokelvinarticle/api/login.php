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

$data = json_decode(file_get_contents("php://input"), true);
// Sample data for testing success query and validate for login
$email_user = "admin1@gmail.com";
$password = "password";

// Data from Login Page
// $email_user = $data["username"] ?? '';
// $password = $data["password"] ?? '';

// Prepare the SQL statement to check the username
$query = "SELECT * FROM ac_user WHERE email_user = :email_user AND password = :password";
$stmt = $pdo->prepare($query);
$stmt->bindParam(':email_user', $email_user);
$stmt->bindParam(':password', $password);
$stmt->execute();

// Check if the user exists
$user = $stmt->fetch(PDO::FETCH_ASSOC);

if ($user) {
    echo "Email: " . $user['email_user'] . "<br>";
    echo "Password: " . $user['password'] . "<br>";
} else {
    echo "User not found.";
}

//if ($data) {
    if ($email_user === $user['email_user'] && $password === $user['password']) {
        echo json_encode([
            "status" => "success",
            "message"=> "Login successful!"
        ]);
    } else {
        echo json_encode([
            "status" => "error",
            "message"=> "Invalid username or password"
        ]);
    }
//}

// $validUsername = "admin@gmail.com";
// $validPassword = "password";

// $data = json_decode(file_get_contents("php://input"), true);

// if ($data) {
//     $username = $data["username"] ?? '';
//     $password = $data["password"] ?? '';

    
// } else {
//     echo json_encode([
//         "status" => "error",
//         "message"=> "Invalid request"
//     ]);
// }

?>
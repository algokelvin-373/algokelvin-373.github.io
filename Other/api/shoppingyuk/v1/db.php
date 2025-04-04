<?php
// Set up the response format to return JSON
header('Content-Type: application/json');

// Make function to connect DB
function connectDB() {
    // Database credentials
    $host = 'localhost'; // Your MySQL host (usually localhost)
    $dbname = 'shoppingyuk_db'; // Database name
    $username = 'root'; // Your MySQL username
    $password = ''; // Your MySQL password (leave empty for default)

    // Connect to the database using PDO
    try {
        $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); // Set the PDO error mode to exception
        return $pdo;
    } catch (PDOException $e) {
        echo json_encode(['status' => 'error', 'message' => 'Database connection failed: ' . $e->getMessage()]);
        exit;
    }
}

// Methods format response JSON
function resultResponse($code, $status, $message, $data = null) {
    echo json_encode([
        'code'=> $code,
        'status'=> $status,
        'message'=> $message,
        'data'=> $data,
    ]);
}
?>
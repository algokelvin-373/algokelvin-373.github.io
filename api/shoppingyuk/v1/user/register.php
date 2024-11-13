<?php
// Connect DB phpmyadmin
// Set up the response format to return JSON
header('Content-Type: application/json');

// Database credentials
$host = 'localhost'; // Your MySQL host (usually localhost)
$dbname = 'shoppingyuk_db'; // Database name
$username = 'root'; // Your MySQL username
$password = ''; // Your MySQL password (leave empty for default)

// Connect to the database using PDO
try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); // Set the PDO error mode to exception
} catch (PDOException $e) {
    echo json_encode(['status' => 'error', 'message' => 'Database connection failed: ' . $e->getMessage()]);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);

$username = $data["username"] ?? '';
$nameFirst = $data['name_first'] ?? '';
$nameLast = $data['name_last'] ?? '';
$phoneNumber = $data['phone_number'] ?? '';
$password = password_hash($data['password'], PASSWORD_DEFAULT);

$secretKey = "$password";
$token = hash_hmac('sha256', $username . $password, $secretKey);

//echo $token;

// Query Insert New User
$query = "INSERT INTO sy_user(
    `name_first`, 
    `name_last`, 
    `username`, 
    `password`, 
    `token`, 
    `device`, 
    `phone_number`
) VALUES (
    :name_first,
    :name_last,
    :username,
    :password,
    :token,
    '',
    :phone_number
)";
$stmt = $pdo->prepare($query);
$stmt->bindParam(':name_first', $nameFirst);
$stmt->bindParam(':name_last', $nameLast);
$stmt->bindParam(':username', $username);
$stmt->bindParam(':password', $password);
$stmt->bindParam(':token', $token);
$stmt->bindParam(':phone_number', $phoneNumber);
$stmt->execute();

echo "Success Register"

?>
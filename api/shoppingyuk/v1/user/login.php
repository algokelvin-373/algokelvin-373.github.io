<?php
include '../db.php';

$data = json_decode(file_get_contents("php://input"), true);
$username = $data["username"] ?? '';
$password = password_hash($data['password'], PASSWORD_DEFAULT);

function checkUserByUsernameAndPassword($pdo, $username, $password) {
    $query = "SELECT * FROM sy_user WHERE username = :username AND password = :password LIMIT 1";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(':username', $username);
    $stmt->bindParam(':password', $password);
    $stmt->execute();
    return $stmt->fetch(PDO::FETCH_ASSOC);
}

function updateTokenUser($pdo, $username, $password, $token) {
    $query = "UPDATE sy_user SET token = :token WHERE username = :username AND password = :password";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(':token', $token);
    $stmt->bindParam(':username', $username);
    $stmt->bindParam(':password', $password);
    $stmt->execute();
    return $stmt->fetch(PDO::FETCH_ASSOC);
}

$pdo = connectDB();

// Validate Username and Password
if (checkUserByUsernameAndPassword($pdo, $username, $password)) {
    resultResponse(0, 'Failed','Failed to Login');
} else {
    $secretKey = "$password";
    $token = hash_hmac('sha256', $username . $password, $secretKey);

    updateTokenUser($pdo, $username, $password, $token);

    $data = [
        "token" => $token
    ];

    resultResponse(1,'Success','Success to Login', $data);
}

?>
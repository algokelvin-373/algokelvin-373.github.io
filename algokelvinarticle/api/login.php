<?php

$validUsername = "admin@gmail.com";
$validPassword = "password";

$data = json_decode(file_get_contents("php://input"), true);

if ($data) {
    $username = $data["username"] ?? '';
    $password = $data["password"] ?? '';

    if ($username === $validUsername && $password === $validPassword) {
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
} else {
    echo json_encode([
        "status" => "error",
        "message"=> "Invalid request"
    ]);
}

?>
<?php
include '../db.php';

function getProfileUser($pdo, $userId) {
    $query = "SELECT * FROM sy_user WHERE id = :id";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(':id', $userId);
    $stmt->execute();
    return $stmt->fetch(PDO::FETCH_ASSOC);
}

function sendRequest() {
    $data = json_decode(file_get_contents("php://input"), true);
    $path = $_SERVER['REQUEST_URI'];
    $partParts = explode('/', $path);
    $userId = $partParts[7];

    $pdo = connectDB();
    $profileUser = getProfileUser($pdo,$userId);

    if ($profileUser) {
        $data = [
            "name_first" => $profileUser["name_first"],
            "name_last" => $profileUser["name_last"],
            "username" => $profileUser["username"],
            "phone_number" => $profileUser["phone_number"],
        ];
        resultResponse(1, "Success", "Success to Get Profile User", $data);
    } else {
        resultResponse(0, "Failed", "Failed to Get Profile User");
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    sendRequest();
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    echo json_encode(["message" => "Error to Response Data"]);
} else {
    http_response_code(405); // Method Not Allowed
    echo json_encode(["error" => "Method not allowed"]);
}

?>
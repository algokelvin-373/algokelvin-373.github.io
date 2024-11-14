<?php
include '../db.php';

$data = json_decode(file_get_contents("php://input"), true);
$userId = $data['userId'];

function getProfileUser($pdo, $userId) {
    $query = "SELECT * FROM sy_user WHERE id = :id";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(':id', $userId);
    $stmt->execute();
    return $stmt->fetch(PDO::FETCH_ASSOC);
}

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

?>
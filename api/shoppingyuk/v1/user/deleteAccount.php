<?php
include '../db.php';

$data = json_decode(file_get_contents("php://input"), true);
$userId = $data['userId'];

function deleteProfile($pdo, $userId) {
    $query = "DELETE FROM sy_user WHERE id = :id";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(':id', $userId);
    $stmt->execute();
    return $stmt->rowCount() > 0;
}

$pdo = connectDB();

if (deleteProfile($pdo, $userId)) {
    resultResponse(1, 'success','Success to Delete Account');
} else {
    resultResponse(0, "Failed", "Failed to Delete Account");
}

?>
<?php
include '../db.php';

function deleteProfile($pdo, $userId) {
    $query = "DELETE FROM sy_user WHERE id = :id";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(':id', $userId);
    $stmt->execute();
    return $stmt->rowCount() > 0;
}

function sendRequestDeleteAccount() {
    $data = json_decode(file_get_contents("php://input"), true);
    $userId = $data['userId'];

    $pdo = connectDB();

    if (deleteProfile($pdo, $userId)) {
        resultResponse(1, 'success','Success to Delete Account');
    } else {
        resultResponse(0, "Failed", "Failed to Delete Account");
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    sendRequestDeleteAccount();
} else {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"]);
}

?>
<?php
include '../db.php';

function updateProfile($pdo, $userId, $nameFirst, $nameLast, $phoneNumber) {
    $query = "UPDATE sy_user SET name_first = :name_first, name_last = :name_last, phone_number = :phone_number WHERE id = :id";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(':id', $userId);
    $stmt->bindParam(':name_first', $nameFirst);
    $stmt->bindParam(':name_last', $nameLast);
    $stmt->bindParam(':phone_number', $phoneNumber);
    $stmt->execute();
    return $stmt->rowCount() > 0;
}

function getProfileUser($pdo, $userId) {
    $query = "SELECT * FROM sy_user WHERE id = :id";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(':id', $userId);
    $stmt->execute();
    return $stmt->fetch(PDO::FETCH_ASSOC);
}

function sendRequestUpdateProfile() {
    $data = json_decode(file_get_contents("php://input"), true);
    $path = $_SERVER['REQUEST_URI'];
    $partParts = explode('/', $path);

    $userId = $partParts[7];
    $nameFirst = $data['name_first'];
    $nameLast = $data['name_last'];
    $phoneNumber = $data['phone_number'];

    $pdo = connectDB();

    if (updateProfile($pdo, $userId, $nameFirst, $nameLast, $phoneNumber)) {
        $profileUser = getProfileUser($pdo,$userId);
        if ($profileUser) {
            $data = [
                "name_first" => $profileUser["name_first"],
                "name_last" => $profileUser["name_last"],
                "username" => $profileUser["username"],
                "phone_number" => $profileUser["phone_number"],
            ];
            resultResponse(1, "Success", "Success to Update Profile User", $data);
        }
    } else {
        resultResponse(0,'Failed', 'Failed to Update Profile User');
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    sendRequestUpdateProfile();
} else {
    http_response_code(405); // Method Not Allowed
    echo json_encode(["error" => "Method not allowed"]);
}

?>
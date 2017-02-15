<?php
$message = $_POST["message"];
$firstName = $_POST["firstName"];
$lastName = $_POST['lastName'];
$email = $_POST['email'];
if(isset($message)) {
    $data = array(
        "User Message" => $message,
        "User First Name" => $firstName,
        "User Last Name" => $lastName,
        "User E-Mail" => $email
    );
    echo json_encode($data);
}
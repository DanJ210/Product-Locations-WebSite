<?php
$message = $_POST["message"];

if(isset($message)) {
    $data = array(
        "User Message" => $message,
        
    );
    echo json_encode($data);
}
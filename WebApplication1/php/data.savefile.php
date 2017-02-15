<?php 
$message = $_POST['message'];
if(isset($message)) {
    $data = array(
        "First Product" => $message
    );
    echo json_encode($data);
};
?>
<?php 
$message = $_POST['product'];
if(isset($message)) {
    $data = array(
        "First Product" => $message
    );
    echo json_encode($data);
};
?>
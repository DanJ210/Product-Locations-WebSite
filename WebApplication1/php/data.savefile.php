<?php 
$product = $_POST['product'];
$primary = $_POST['primary'];
if(isset($product)) {
    $data = array(
        "First Product" => $product,
        "Primary" => $primary
    );
    echo json_encode($data);
};
?>
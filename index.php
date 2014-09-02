<?php
    $title = "Matrix Calculator";
    
    $content = "Please enter your matrix";
    
    if (isset($_POST['result_matrix'])){
        $resultMatirx = htmlspecialchars($_POST['result_matrix']);
    }
    else{
        $resultMatrix = null;
    }
    
    include '/includes/template.php';
?>
<?php
    $title = "Matrix Calculator";
    
    $content = "Please enter your matrix";
    
    $resultMatirx = htmlspecialchars($_POST['result_matrix']);
    
    include '/includes/template.php';
?>
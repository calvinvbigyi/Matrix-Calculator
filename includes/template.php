<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title><?php echo $title; ?></title>
        <link rel="stylesheet" type="text/css" href="/css/StyleSheet.css"></link>
    </head>
    <body>
        <div id="wrapper">
            
            <nav id="nav">
                <ul>
                    <li><a href="index.php">Home</li>
                    <li><a href="#">Brief introduction</li>
                    <li><a href="#">Author</li>
                </ul>
            </nav>
            <div id="content">
                <?php
                   echo $content;
                ?>
               
            </div>
            <div id="content_area">
                <input id="matrix" />
                <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>                
                <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.11.1/jquery-ui.min.js"></script>
                <script src="/js/Matrix.js" ></script>
            </div>
            <footer>
                <p>All rights reserved.</p>
            </footer>
        </div>
    </body>
</html>

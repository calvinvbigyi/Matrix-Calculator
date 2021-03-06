
<html>
    <head>
        <meta charset="UTF-8">
        <title><?php echo $title; ?></title>
        <link rel="stylesheet" type="text/css" href="/css/StyleSheet.css"></link>
    </head>
    <body>
        <div id="wrapper">
            
            <div id="content">
                <?php
                   echo $content;
                ?>
            </div>
            <div id="content_area">
                  <form method="post" id="matrix_form" action="index.php">
                    <textarea id="result_matrix" name="result_matrix"></textarea><br></br>
                    <input type="radio" name="matrix_f" value="det" id="det"> Get the Determinant <br>
                    <input type="radio" name="matrix_f" value="inv" id="inv"> Get the Inverse Matrix<br>
                    <input type="radio" name="matrix_f" value="add" id="add"> Get the Sum Matrix<br>
                    <input type="radio" name="matrix_f" value="sub" id="sub"> Get the Substract Matrix<br>
                    <input type="radio" mane="matrix_f" value="mul" id="mul"> Get the Multiplication Matrix<br>
                    <input type="radio" mane="matrix_f" value="div" id="div"> Get the Division Matrix<br></br>
                    <input type="submit" name="submit" value="Calculate Now!" id="submit"/>
                  </form>
                <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>                
                <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.11.1/jquery-ui.min.js"></script>
                <script src="/js/Matrix.js" ></script>
                <br></br>
                <div id="res">
                   <span></span>
                </div>
            </div>
            <footer>
                <p>All rights reserved. Powered by Calvin & Leticia</p>
            </footer>
        </div>
    </body>
</html>

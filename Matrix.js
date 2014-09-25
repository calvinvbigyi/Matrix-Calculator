$(document).ready(function(){

$("#matrix_form").submit(function(event) {
    event.preventDefault();
    var matrixString = $("#result_matrix").val();
    var matrixR = matrixString.split("\n");
    var j = 0;
    for (var i = 0; i < matrixR.length; i++) {
        if (matrixR[j] != undefined && matrixR[j] != null) {
            matrixR[j] = matrixR[j].split(" ");
            j++;
        }
    }
    
    if ($("#det").is(":checked")) {
        $("span").text(determinant(matrixR)).show();
    }
    if ($("#inv").is(":checked")) {
        // var inverseMatrix = inverse(matrixR);
        // var row = inverseMatrix.length;
        // for (var j = 0; j < row; j++){
        //     for (var i = 0; i < row; i++){
        //         $("span").text(inverserMatrix[j][i].show());
        //     }
        // }
        for (var j = 0; j < matrixR.length; j++) {
            for (var i = 0; i < matrixR[0].length; i++) {
                console.log(inverse(matrixR));
            }
        }
    }
   
});


//Validate each matrix by identifying its data type and whether col == row 
function validate(matrix) {
    if (matrix != null) {
        if (matrix instanceof Array) {
            var col = matrix[0].length;
            for (var i = 0; i < col; i++) {
                if (matrix[i] instanceof Array) {
                    if (matrix[i].length == col) {
                        return true;
                    }
                    else{
                        return false;
                    }
                }
                else{
                    throw new MatrixFormatException(matrix);
                }
            }
        }
        else {
            throw new MatrixFormatException(matrix);
        }
    }
    else {
        return zeroMatrix(0);
    }
}

//Create a n*n zero matrix
function zeroMatrix(n){
    var matrix = [];
    for (var i = 0; i < n; i++){
        for (var j = 0; j < n; j++){
            matrix[i][j] = 0;
        }
    }
    return matrix;
}

//Create a n*n identity matrix
function identityMatrix(n){
    var matrix = [];
    for (var i = 0; i < n; i++){
        for (var j = 0; j < n; j++){
            if ((i+j) %2 == 0){
                matrix[i][j] = 1;
            }
            else {
                matrix[i][j] = 0;
            }
        }
    }
    return matrix;
}

function MatrixFormatException(matrix){
    return matrix + "does not have a proper matrix format."
}

function addORSub(operation, matrix1, matrix2){
    if(validate(matrix1) && validate(matrix2)){
        if(matrix1.length === matrix2.length){
            var matrixR = [];
            var row1 = matrix1.length;
            var col1 = matrix1[0].length;
            var col2 = matrix2[0].length;
            if(col1 === col2){
                for(var i = 0; i < row1; i++){
                    for(var j = 0; j < matrix1[i].length; j++){
                        if(operation === "addition"){
                            matrixR[i][j] = matrix1[i][j] + matrix2[i][j];
                        }else if(operation === "substraction"){
                            matrixR[i][j] = matrix1[i][j] - matrix2[i][j];
                        }
                    }
                }
                return matrixR;
            }
            return;
        }
        return;
    }
}

function multiplication(matrix1, matrix2){
    if(validate(matrix1) && validate(matrix2)){
        var col1 = matrix1[0].length;
        var col2 = matrix2[0].length;
        var row1 = matrix1.length;
        var row2 = matrix2.length;
        if(col1 === row2){
            var matrixR;
            for(var i = 0; i < row1; i++){
                for(var j = 0; j < col2; j++){
                    for(var k = 0; k < matrix1[i].length; k++){
                        var result = 0;
                        var partial = matrix1[i][k] * matrix2[k][j];
                        result += partial;
                    }
                    matrixR[i][j] = result;
                }
            }
            return matrixR;
        }
    }
}

/* need more work to do with this function
function division(matrix1, matrix2){
    if(validate(matrix1) && validate(matrix2)){
        matrix2Inverse = inverse(matrix2);
        return multiplication(matrix1, matrix2Inverse);
    }
    return;
}
*/

function transpose(matrix){
    if(validate(matrix)){
        var row = matrix.length;
        var col = matrix[0].length;
        var matrixR = new Array(row);
        for (var i = 0; i < row; i++) {
            matrixR[i] = new Array(row);
        }
        for(var j = 0; j < row; j++){
            for(var i = 0; i < col; i++){
                matrixR[j][i] = matrix[i][j];
            }
        }
        return matrixR;
    }
}

//deternimant can only be calculated for square matrix;
//Check if it works right now.
function determinant(matrix){
    if(validate(matrix)){
        var col = matrix[0].length;
        var row = matrix.length;
        if (col != row){
            return "Please enter a squre matrix."
        }
        else{
            if (col == 1){
                return matrix[0][0]
            }
            if (col == 2){
                return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
            }
            var det = 0;
            for (var primary_col = 0; primary_col < col; primary_col++){
                var mirror_matrix = new Array(col - 1);
                for (var e = 0; e < mirror_matrix.length; e++){
                    mirror_matrix[e] = new Array(col - 1);
                }
                for (var j = 1; j < col; j++){
                    for(var i = 0; i < col; i++){
                        if(i < primary_col){
                            mirror_matrix[j-1][i] = matrix[j][i];
                        }
                        else if(i > primary_col){
                            mirror_matrix[j-1][i-1] = matrix[j][i];
                        }
                    }
                }
                det += matrix[0][primary_col] * Math.pow(-1, primary_col) * determinant(mirror_matrix);
            }
            return det;
        }  

    }
}


function inverse(matrix){
    if (validate(matrix)){
        var row = matrix.length;
        var col = matrix[0].length;
        var result = new Array(row);
        var det = determinant(matrix);
        for (var i = 0; i < row; i++) {
            result[i] = new Array(row);
        }
        if (det != 0 && (row == col)) {
            for (var j = 0; j < row; j++) {
                for (var i = 0; i < col; i++) {
                    result[j][i] = transpose(cofactor(matrix))[j][i] / det; 
                }
            }
        return result;   
        }
    }
}

function cofactor(matrix){
    if (validate(matrix)){
        var row = matrix.length;
        var col = matrix[0].length;
        if (row == col) {
            var result = new Array(row);
            for (var i = 0; i < row; i++) {
               result[i] = new Array(row);
            }
            for(var primary_row = 0; primary_row < row; primary_row++){
                for(var primary_col = 0; primary_col < col; primary_col++){
                    result[primary_row][primary_col] = Math.pow(-1, (primary_row + primary_col)) * determinant(subMatrix(matrix, primary_row, primary_col));
                }
            }
            return result;
        }
        
    }   
}

function subMatrix(matrix, primary_col, primary_row) {
    if (validate(matrix)) {
        var row = matrix.length;
        var col = matrix[0].length;
        if (row == col) {
            var sub_matrix = new Array(row);
            for (var i = 0; i < row; i++) {
                sub_matrix[i] = new Array(row);
            }

            for (var j = 0; j < row; j++) {
                for (var i = 0; i < row; i++) {
                    if ( j != primary_row && i != primary_col) {
                        sub_matrix[j][i] = matrix[j][i];
                    }
                    else if ( j == primary_row || i == primary_col) {
                        sub_matrix[j][i] = "null";
                    }
                }
            }
            
            for (var j = 0; j < row; j++) {
                for (var i = 0; i < row; i++) {
                    if (sub_matrix[j][i] === "null") {
                        sub_matrix[j].splice(i, 1);
                    }
                }
            }
            
            for (var i = 0; i < row; i++) {
                if (sub_matrix[i] != null) {
                    if (sub_matrix[i].length == (row - 2)) {
                        sub_matrix.splice(i, 1);
                    }
                } 
            }
            return sub_matrix;
        }
    }
}
});


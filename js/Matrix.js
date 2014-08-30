var data;
var matrix;


//Validate each matrix by identifying its data type and whether col == row 
function validate(matrix){
    if (matrix != null){
        if (matrix instanceof Array){
            var col = matrix[0].length;
            for (var i = 0; i < col; i++){
                if (matrix[i] instanceof Array){
                    if (matrix[i].length == col){
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
        else{
            throw new MatrixFormatException(matrix);
        }
    }else{
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
            var col1 = matrix1[0].length;
            var col2 = matrix2[0].length;
            if(col1 === col2){
                for(var i = 0; i < matrix1.length; i++){
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
        else {
            return;
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
        var matrixR;
        for(var i = 0; i < matrix.length; i++){
            for(var j = 0; j < matrix[i].length; j++){
                matrixR[j][i] = matrix[i][j];
            }
        }
    }
}

//deternimant can only be calculated for square matrix;
function determinant(matrix){
    if(validate(matrix)){
        var det = 0;
        var col = matrix[0].length;
        var row = matrix.length;
        var mirrorMatrix = [];
        if (col != row){
            return "Sorry, please enter a square matrix."
        }
        else{
            if (col == 1){
                return matrix[0][0];
            }
            else if (col == 2){
                return matrix[0][0]*matrix[1][1] - matrix[0][1]*matrix[1][0];
            }
            else if (col > 2){
                for (var primary_col = 0; primary_col < col; primary_col++){
                    for (var j = 1; j < row; j++){
                        mirrorMatrix[j-1][primary_col] = matrix[j][primary_col+1];
                        det += matrix[0][primary_col] * Math.pow(-1,primary_col) * determinant(mirrorMatrix);
                    }
                }
            }
        }
        return det;
    }
}

function inverse(matrix){
    
}
var data;
var matrix;


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

function zeroMatrix(n){
    var matrix;
    for (var i = 0; i < n; i++){
        for (var j = 0; j < n; j++){
            matrix[i][j] = 0;
        }
    }
    return matrix;
}

function MatrixFormatException(matrix){
    return matrix + "does not have a proper matrix format."
}

function addORSub(operation, matrix1, matrix2){
    if(validate(matrix1) && validate(matrix2)){
        if(maxtrix1.length === matrix2.length){
            var matrixR = new Array();
            var col1 = matrix1[0].length;
            var col2 = matrix2[0].length;
            if(col1 === col2){
                for(var i = 0; i < matrix1.length; i++){
                    for(var j = 0; j < matrix1[i].length; j++){
                        if(operation === "addition"){
                            matrixR[i][j] = matrix1[i][j] + matrrix2[i][j];
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
        if(col1 === matrix2.length){
            var matrixR;
            for(var i = 0; i < matrix1.length; i++){
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
        return;
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
function determinant(matrix){
    if(validate(matrix)){
        if(matrix.length === matrix[0].length){
            
        }
            return;
    }
        return;
}

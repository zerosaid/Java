function crearmatrices(fli, col) {
    let mat = []
    for(let i=0; i<fli;  i++)
        mat[i]= new Array(col);

    return mat;
}

function crearmatricesvalor(fli, col, valor) {
    let mat = []
    for(let i=0; i<fli;  i++){
        mat[i]= new Array(col);
        for(let j=0; j < col; j++)
            mat[i][j]= valor;
    }
    return mat;
}

function printMatriz(mat) {
    for(let f=0; f < mat.length; ++f){
        let strfila= "";
        for(let c=0; c < mat[f]; c++){
        fila += mat[f][c] + "\t";
        }
        console.log(strfila);
    }
}

let matriz= crearmatricesvalor(3,2,"Hola");
printMatriz(matriz);
console.table(matriz);
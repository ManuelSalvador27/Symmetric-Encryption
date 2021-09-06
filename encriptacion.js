let abecedario=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9','.',',',';'];
let abecedarioCifrado=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9','.',',',';'];
let mensaje;
let clave;
let matriz=new Array(8);
let matrizTranspuesta=new Array(5);

console.log(abecedarioCifrado);

//mover cuatro espacios a la derecha
for( i=0;i<abecedario.length;i++){
    if(i>=4){
        abecedarioCifrado[i]=abecedario[i-4];
        
    }else{
        abecedarioCifrado[i]=abecedario[abecedario.length-4+i];

    }
    
}
//LLENAR MATRIZ
console.log(matriz);
for(i=0,r=0; i<8;i++){
    matriz[i]= new Array(5);
    for(e=0;e<5;e++,r++){
       // console.log(matriz[i][e]);
        
        matriz[i][e]=abecedarioCifrado[r];
    }

}
console.log("matriz original");
console.log(matriz);

//TRANSPUESTA
for(row=0; row<5;row++){
    
    for(column=0;column<row;column++){
       // console.log(matriz[i][e]);
       let temp = matriz[row][column]
       matriz[row][column] = matriz[column][row]
       matriz[column][row] = temp
    }

}


/*
const transpose = matrix => {
    for (let row = 0; row < matrix.length; row++) {
      for (let column = 0; column < row; column++) {
        let temp = matrix[row][column]
        matrix[row][column] = matrix[column][row]
        matrix[column][row] = temp
      }
    }
    return matrix;
}

transpose(matriz);

*/

//console.log(abecedarioCifrado);
console.log("matriz tk");
console.log(matriz);

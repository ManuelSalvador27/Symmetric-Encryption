let abecedario=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9','.',',',';'];
let abecedarioCifrado=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9','.',',',';'];
let mensaje="el ci";
let clave=['c'];

let matriz=new Array(8);
let matrizTranspuesta=new Array(5);
let resultadoXOR=[];


var arrayCharMensaje = mensaje.split('');
console.log(arrayCharMensaje);

var claveBin=text2Binary(clave);

claveBin=claveBin.replace( /\s/g, '');

const mensBin=text2Binary(arrayCharMensaje);

console.log(claveBin,"clave");
console.log(mensBin,"mensaje");

console.log(claveBin.length);

//1.CONFUSION
//XOR DE CADA BIT CON CADA BIT DE LA CLAVE
    for(var g=0,p=0; p<mensBin.length-1; g++,p++){
        if(mensBin[p]!=' '){
           resultadoXOR.push(claveBin[g]^mensBin[p]);
        }else{     
            resultadoXOR.push(claveBin[g]^mensBin[p+1]);
            p+=1;
        }   
        if(g>=claveBin.length-1){    
            g=-1;
        }
    }
    
console.log(resultadoXOR);


/*
let arrayBitsMensaje=new Array(2);

for(l=0,h=0;h<3;l+=bitClave.length,h++){
    arrayBitsMensaje[h]="";
    for(j=0; j<bitClave.length;j++){

            arrayBitsMensaje[h]=arrayBitsMensaje[h]+bitMensaje[j+l];
    }
}
*/


//DIFUSION
//1. DESPLAZAMIENTO 4 A LA DERECHA
//mover cuatro espacios a la derecha
for( i=0;i<abecedario.length;i++){
    if(i>=4){
        abecedarioCifrado[i]=abecedario[i-4];
        
    }else{
        abecedarioCifrado[i]=abecedario[abecedario.length-4+i];

    }
    
}
//LLENAR MATRIZ

for(i=0,r=0; i<8;i++){
    matriz[i]= new Array(5);
    for(e=0;e<5;e++,r++){
       // console.log(matriz[i][e]);
        
        matriz[i][e]=abecedarioCifrado[r];
    }

}
console.log("matriz original");
console.log(matriz);

//DIFUSION
//2. TRANSPUESTA
for(row=0; row<5;row++){
    matrizTranspuesta[row]= new Array(8);
    for(column=0;column<8;column++){
    
       matrizTranspuesta[row][column]=matriz[column][row];
    }
}

function text2Binary(input) {
    var output="";
    for (var i = 0; i < input.length; i++) {
       
             output += input[i].charCodeAt(0).toString(2) + " ";
    }
        return output;
}

function binaryToString(bin){
  var output=  bin.split(' ') //Split string in array of binary chars
    .map(bin => String.fromCharCode(parseInt(bin, 2))) //Map every binary char to real char
    .join('');
    return output;
}

console.log("matriz transpuesta");
console.log(matrizTranspuesta);

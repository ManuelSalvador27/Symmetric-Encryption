let abecedario=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9','.',',',';'];
let abecedarioCifrado=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9','.',',',';'];
let defineRows;
let matrizTranspuesta;

function crifrar(){
    let mensaje= document.getElementById('mensaje').value;
    let clave= document.getElementById('passwd').value;
    console.log(abecedario);
    let matriz=new Array(8);

   
    //Convert to string 
    mensaje = String(mensaje);
    clave = String(clave);
    clave =  clave.split('');
    //DIFUSION
    //1. TRANSPUESTA
     defineRows= mensaje.length/3;
    defineRows=Math.ceil(defineRows);
    console.log(defineRows);
     matrizTranspuesta=new Array(defineRows);
    
    for(row=0,i=0; row<defineRows;row++){
        matrizTranspuesta[row]= new Array(3);
        for(column=0;column<3;column++){
        
           matrizTranspuesta[row][column]=mensaje[i];
           if(matrizTranspuesta[row][column]==undefined){
            matrizTranspuesta[row][column]=' ';
           }
           i++;
        }
    }
    console.log(matrizTranspuesta,"llenar en Matriz 5*3");
    
    
    
    //Mostrar por columna
    let mensajeTransp=[];
    for(column=0,i=0; column<3;column++){
        for(row=0;row<defineRows;row++){
           mensajeTransp.push(matrizTranspuesta[row][column]);
        }
    }
    
    console.log(mensajeTransp,"mensajePorColumna");
    
    //recorrido 4 a la derecha
    let nuevoAr=[];
    for( i=4;i<mensajeTransp.length;i++){
        
        nuevoAr.push(mensajeTransp[i]); 
    }
    for(i=0;i<4;i++){
        nuevoAr.push(mensajeTransp[i]); 
    }
    
    console.log(nuevoAr,"nuevoArregloRecorrido")
    
    
    
    //CIFRADO XOR

    let xorfinal=[];
    for(x=0,g=0; x<nuevoAr.length;x++,g++){
      let f=  clave[0].charCodeAt(0)^nuevoAr[x].charCodeAt(0);
        if(f<=32){
            f+=33;
        }
        xorfinal.push(f);
       
    }
    
    console.log(xorfinal,"xorFinal");
    let imprimir=[];
    for(f=0;f<xorfinal.length;f++){
      console.log(xorfinal[f]);
    }
    console.log("comienza CaracteresCifrados +32");
    for(g=0; g<xorfinal.length;g++){
        console.log(String.fromCharCode(xorfinal[g]));
     }
    
    
    //Sustitucion con recorrido del alfabeto
     for(f=0;f<xorfinal.length;f++){
         let check =xorfinal[f];
         check =check+4;
         if(check>255){
            check=check-255;
            check=check+33;
            xorfinal[f]=xorfinal[f]+check;
    
         }else{
             xorfinal[f]=xorfinal[f]+4;
         }
        
    }
    console.log(xorfinal,"XOR RECORRIDO 4"); //TODO: PRINT MENSAJE ENCRIPTADO
    let response = []
    for(g=0; g<xorfinal.length;g++){
        response.push(String.fromCharCode(xorfinal[g]))
    }
    let msg = response.join("")
    
    document.getElementById("respuesta").innerHTML =msg ;
}


//Función para decifrar
function decifrar(){
    //debugger
    let mensaje= document.getElementById('mensaje').value;
    let clave= document.getElementById('passwd').value;
    console.log(mensaje,"MENSAJE 1.");

    //let matriz=new Array(8);

    //Convert to string 
    
    clave = String(clave);
    clave =  clave.split('');
   
    //DESCIFRADO DEL XOR

    let charCodesMensaje=[];
    for(g=0;g<mensaje.length;g++){
       
        charCodesMensaje.push(mensaje[g].charCodeAt(0));
   

    }
    for(g=0;g<charCodesMensaje.length;g++){
      
   console.log(charCodesMensaje[g]);

    }

    
    for(f=0;f<charCodesMensaje.length;f++){
        let check =charCodesMensaje[f];
        check =check-4;
        if(check<=32){
            check=check+4;
            check=check-32;
           check=255-check;
           
           charCodesMensaje[f]=charCodesMensaje[f]+check;
    
        }else{
            charCodesMensaje[f]=charCodesMensaje[f]-4;
        }
       
     }
    
     console.log(charCodesMensaje,"CHARCODESMENSAJE");
    
    
    let desXor=[];
    for(x=0,g=0; x<charCodesMensaje.length;x++,g++){
      let k;
      k=charCodesMensaje[x]-32;
      if(k<=32){
        charCodesMensaje[x]=charCodesMensaje[x]-33;
        desXor.push((charCodesMensaje[x])^clave[0].charCodeAt(0));
      }else{
          desXor.push((charCodesMensaje[x])^clave[0].charCodeAt(0));
      }
       
       
    }
    
    console.log(desXor,"desXor");
    
    //Descifrando
     //recorrido 4 a la izquierda
    let recorridoIzq=[];
    for( i=desXor.length-4;i<desXor.length;i++){
        
        recorridoIzq.push(desXor[i]); 
    }
    for(i=0;i<desXor.length-4;i++){
        recorridoIzq.push(desXor[i]); 
    }
    
    for(g=0; g<recorridoIzq.length;g++){
        
        console.log(String.fromCharCode(recorridoIzq[g]));
        
     }
    
    console.log(recorridoIzq,"recorridoIzq");
    
    //1. TRANSPUESTA
    let defineR= recorridoIzq.length/3;
    defineR=Math.ceil(defineR);
    console.log(defineR);
    let matTrans=new Array(3); 
    
    for(row=0,i=0; row<defineR;row++){
        matTrans[row]=new Array(3);
      
    }
    
    for(row=0,i=0; row<3;row++){
        
        for(column=0;column<defineR;column++){
        
           matTrans[column][row]=recorridoIzq[i];
           if(matTrans[column][row]==undefined){
            matTrans[column][row]=' ';
           }
           i++;
        }
    }
    console.log(matTrans,"letMatTrans");

    let arregloFinal=[];
    for(row=0; row<defineR;row++){
        for(column=0;column<3;column++){
        
          arregloFinal.push(matTrans[row][column]);
        }
    }
    
    let arregloCharFinal=[];
    for(x=0; x<arregloFinal.length;x++){
        arregloCharFinal.push(String.fromCharCode(arregloFinal[x]));
    }
    
    let mensajeDescifrado=arregloCharFinal.join("");
    
    
    
    console.log(arregloCharFinal,"arregloFinal"); //TODO: PRINT MENSAJE DESENCRIPTADO
    document.getElementById("respuesta2").innerHTML =mensajeDescifrado;
}

  

function convert(num) {
    return num
        .toString()    // convert number to string
        .split('')     // convert string to array of characters
        .map(Number)   // parse characters as numbers
        .map(n => (n || 10) + 64)   // convert to char code, correcting for J
        .map(c => String.fromCharCode(c))   // convert char codes to strings
        .join('');     // join values together
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


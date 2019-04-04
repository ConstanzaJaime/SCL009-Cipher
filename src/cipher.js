window.cipher = {
  encode: (string,offset) => { ////FUNCION CODIFICAR
    let outputText="";
    
    for(let i=0;i< string.length;i++){ //Ciclo de codificado
      
      let originalASCII=string[i].charCodeAt(0); //Código ASCII de caracteres ingresados

      if(originalASCII>=65 && originalASCII<=90){ //Rango de caracteres en mayúsculas según código ASCII
      let offsetASCII=(originalASCII-65+offset)%26+65; //Código ASCII de caracteres de salida
      encodeText= String.fromCharCode(offsetASCII);//Caracteres codificados    
    }
      outputText += encodeText; //Concatenación de caracteres codificados
    } 
    return outputText //Concatenación de caracteres codificados
  },

  decode: (string,offset) => {  ////FUNCION DECODIFICAR
    let outputText="";
      
    for(let i=0;i< string.length;i++){ //Ciclo de decodificado
      
      let originalASCII=string[i].charCodeAt(0); //Código ASCII de caracteres ingresados

      if(originalASCII>=65 && originalASCII<=90){   //Rango de caracteres en mayúsculas según código ASCII
      let offsetASCII=(originalASCII+65-offset)%26+65;  //Código ASCII de caracteres de salida
      decodeText= String.fromCharCode(offsetASCII);   //Caracteres decodificados  
    }
      outputText += decodeText;  //Concatenación de caracteres decodificados
    } 
    return outputText //Concatenación de caracteres decodificados
  }
};

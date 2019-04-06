window.cipher = {
  encode: (string,offset) => { ////FUNCION CODIFICAR
    let outputText="";
    let encodeText="";

    for(let i=0;i< string.length;i++){ //Ciclo de codificado
      
      let originalASCII=string[i].charCodeAt(0); //Código ASCII de caracteres ingresados

      if(originalASCII>=65 && originalASCII<=90){ //Rango de caracteres en mayúsculas según código ASCII
      let offsetASCII=(originalASCII-65+offset)%26+65; //Código ASCII de caracteres de salida
      encodeText= String.fromCharCode(offsetASCII);//Caracteres codificados    
    } if(originalASCII>=97 && originalASCII<=122){ //Rango de caracteres en minúsculas según código ASCII
      let offsetASCII=(originalASCII-97+offset)%26+97; //Código ASCII de caracteres de salida
      encodeText= String.fromCharCode(offsetASCII);//Caracteres codificados    
    } if(originalASCII=== 32 || originalASCII=== 63){ //Espacio según código ASCII
      let offsetASCII= originalASCII; //Código ASCII de caracteres de salida
      encodeText= String.fromCharCode(offsetASCII);//Caracteres codificados    
    }
      outputText += encodeText; //Concatenación de caracteres codificados
    } 
    return outputText //Retorno de caracteres codificados
  },

  decode: (string,offset) => {  ////FUNCION DECODIFICAR
    let outputText="";
    let decodeText="";
      
    for(let i=0;i< string.length;i++){ //Ciclo de decodificado
      
      let originalASCII=string[i].charCodeAt(0); //Código ASCII de caracteres ingresados

      if(originalASCII>=65 && originalASCII<=90){   //Rango de caracteres en mayúsculas según código ASCII
      let offsetASCII=(originalASCII-90-offset)%26+90;  //Código ASCII de caracteres de salida
      decodeText= String.fromCharCode(offsetASCII);   //Caracteres decodificados  
    } if(originalASCII>=97 && originalASCII<=122){ //Rango de caracteres en minúsculas según código ASCII
      let offsetASCII=(originalASCII-122-offset)%26+ 122; //Código ASCII de caracteres de salida
      decodeText = String.fromCharCode(offsetASCII);//Caracteres decodificados    
    } if(originalASCII=== 32 || originalASCII=== 63){ //Espacio según código ASCII
      let offsetASCII= originalASCII; //Código ASCII de caracteres de salida
      decodeText= String.fromCharCode(offsetASCII);//Caracteres decodificados    
    }
      outputText += decodeText;  //Concatenación de caracteres decodificados
    } 
    return outputText //Retorno de caracteres decodificados
  }
};

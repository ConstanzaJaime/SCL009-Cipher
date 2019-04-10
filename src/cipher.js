window.cipher = {
  encode: (string,offset) => { ////FUNCION CODIFICAR
    let outputText="";
    let encodeText="";
   
    for(let i=0;i< string.length;i++){ //Ciclo de codificado
      
      let ascii=string[i].charCodeAt(0); //Código ASCII caracteres ingresados
      let specialCaracter= (ascii>=32 && ascii<=47)||(ascii>=58 && ascii<=64)||
      (ascii>=91 && ascii<=96)||(ascii>=123 && ascii<=254) ;

      if(offset>=0){ if(ascii>=65 && ascii<=90){ //Rango Mayúsculas ASCII
        encodeText= String.fromCharCode((ascii-65+offset)%26+65);//Caracteres codificados    
        } if(ascii>=97 && ascii<=122){ //Rango Minúsculas ASCII
          encodeText= String.fromCharCode((ascii-97+offset)%26+97);//Caracteres codificados    
        } if(ascii>=48 && ascii<=57){ //Rango Números ASCII
          encodeText= String.fromCharCode((ascii-48+offset)%10+48);//Caracteres codificados
        } if(specialCaracter){ //Rango caracteres especiales ASCII
          encodeText= String.fromCharCode(ascii);//Caracteres codificados    
        }
      } if(offset<0){ if(ascii>=65 && ascii<=90){ //Rango Mayúsculas ASCII
          encodeText= String.fromCharCode((ascii-90+offset)%26+90);//Caracteres codificados    
        } if(ascii>=97 && ascii<=122){ //Rango Minúsculas ASCII
          encodeText= String.fromCharCode((ascii-122+offset)%26+122);//Caracteres codificados    
        } if(ascii>=48 && ascii<=57){ //Rango Números ASCII
          encodeText= String.fromCharCode((ascii-57+offset)%10+57);//Caracteres codificados
        } if(specialCaracter){ //Rango caracteres especiales ASCII
          encodeText= String.fromCharCode(ascii);//Caracteres codificados    
        }
      }
      outputText += encodeText; //Concatenación de caracteres codificados
    } 
    return outputText //Caracteres codificados
  },

  decode: (string,offset) => {  ////FUNCION DECODIFICAR
    let outputText="";
    let decodeText="";
      
    for(let i=0;i< string.length;i++){ //Ciclo de decodificado
      
      let ascii=string[i].charCodeAt(0); //Código ASCII de caracteres ingresados
      let specialCaracter= (ascii>=32 && ascii<=47)||(ascii>=58 && ascii<=64)||
      (ascii>=91 && ascii<=96)||(ascii>=123 && ascii<=254) ;

      if(offset>=0){ if(ascii>=65 && ascii<=90){   //Rango de caracteres en mayúsculas según código ASCII
        decodeText= String.fromCharCode((ascii-90-offset)%26+90);//Caracteres decodificados  
        } if(ascii>=97 && ascii<=122){ //Rango de caracteres en minúsculas según código ASCII
          decodeText = String.fromCharCode((ascii-122-offset)%26+ 122);//Caracteres decodificados    
        } if(ascii>=48 && ascii<=57){ //Rango Números ASCII
          decodeText= String.fromCharCode((ascii-57-offset)%10+57);//Caracteres codificados
        } if(specialCaracter){ //Espacio según código ASCII
          decodeText= String.fromCharCode(ascii);//Caracteres codificados    
        }
      } if(offset<0){ if(ascii>=65 && ascii<=90){   //Rango de caracteres en mayúsculas según código ASCII
        decodeText= String.fromCharCode((ascii-65-offset)%26+65);//Caracteres decodificados  
        } if(ascii>=97 && ascii<=122){ //Rango de caracteres en minúsculas según código ASCII
          decodeText = String.fromCharCode((ascii-97-offset)%26+97);//Caracteres decodificados    
        } if(ascii>=48 && ascii<=57){ //Rango Números ASCII
          decodeText= String.fromCharCode((ascii-48-offset)%10+48);//Caracteres codificados
        } if(specialCaracter){ //Espacio según código ASCII
          decodeText= String.fromCharCode(ascii);//Caracteres codificados    
        }
      }
      outputText += decodeText;  //Concatenación de caracteres decodificados
    } 
    return outputText //Caracteres decodificados
  }
};
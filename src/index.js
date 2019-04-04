///BOTON CODIFICAR
document.getElementById("encodeButton").addEventListener("click", () => {

  let string= document.getElementById("inputMessage").value.toUpperCase() ;
  let offset= parseInt(document.getElementById("offset").value);
  let encodeText=cipher.encode(string,offset);

    document.getElementById("outputMessage").value= encodeText;
});

///BOTON DECODIFICAR
document.getElementById("decodeButton").addEventListener("click", () => {

  let string= document.getElementById("inputMessage").value.toUpperCase();
  let offset= parseInt(document.getElementById("offset").value);
  let decodeText=cipher.decode(string,offset);
    
    document.getElementById("outputMessage").value=decodeText ;
});

/// BOTON LIMPIAR
document.getElementById("reset").addEventListener("click", () => {

  document.getElementById("inputMessage").value="";
  document.getElementById("offset").value="";
  document.getElementById("outputMessage").value="";
});
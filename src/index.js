///BOTON CODIFICAR
document.getElementById("encodeButton").addEventListener("click", () => {
  let string= document.getElementById("inputMessage").value;
  let offset= parseInt(document.getElementById("inputOffset").value);
    document.getElementById("outputMessage").value= cipher.encode(string,offset);
});

///BOTON DECODIFICAR
document.getElementById("decodeButton").addEventListener("click", () => {
  let string= document.getElementById("inputMessage").value;
  let offset= parseInt(document.getElementById("inputOffset").value);
    document.getElementById("outputMessage").value=cipher.decode(string,offset);
});

/// BOTON LIMPIAR
document.getElementById("reset").addEventListener("click", () => {
  document.getElementById("inputMessage").value="";
  document.getElementById("inputOffset").value="";
  document.getElementById("outputMessage").value="";
});
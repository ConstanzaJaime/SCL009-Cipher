document.getElementById("encodeButton").addEventListener("click", () => {
    let string= document.getElementById("inputMessage").value.toUpperCase();
    let offset= parseInt(document.getElementById("offset").value);
    let inputText="";
    
    for(let i=0;i< string.length;i++){
    
      let valorASCII=string[i].charCodeAt(0);
    
      if(valorASCII>=65 && valorASCII<=90){ 
      let valorASCIIoffset=(valorASCII-65+offset)%26+65;//imprime código de ASCII + offset
      letraCodificada= String.fromCharCode(valorASCIIoffset)//Imprime letra codificada; 
          console.log(letraCodificada)
       
    }
      inputText= inputText + letraCodificada;
    
    } 
    
    document.getElementById("outputMessage").value= inputText;
    });
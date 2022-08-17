const Input=["a","e","i","o","u"];
const Output=["ai","enter","imes","ober","ufat"];

function encriptar(){
    var inputText = document.getElementById("input-text");
    var texto = inputText.value;
    var output = [];
    inputText.value="";
    if(minusculas(texto) && !caracteresespeciales(texto)){
        for(var index = 0;index<texto.length;index++){
            switch(texto[index]){
                case 'a':
                    output.push(Output[0]);
                    break;
                case'e':
                    output.push(Output[1]);
                    break;
                case'i':
                    output.push(Output[2]);
                    break;
                case 'o':
                    output.push(Output[3]);
                    break;
                case 'u':
                    output.push(Output[4]);
                    break;
                default:
                    output.push(texto[index]);
            }
        }
        ocultarimagen();
        var outputText = document.getElementById("output-text");
        outputText.value = unirarregloenstring(output);
        mostrarBoton();    
    }else{
        alert("tiene mayusculas o caracteres especiales");
    }
}

function descencriptar(){
    var inputText = document.getElementById("input-text");
    var texto = inputText.value;
    var output = [];
    inputText.value="";
    if(minusculas(texto) && !caracteresespeciales(texto)){
        for(index = 0;index<texto.length;index++){
            switch(texto[index]){
                case 'a':
                    if(index<texto.length-1){
                        if(texto[index+1] == 'i'){
                            output.push('a');
                            index++;
                        }else{
                            output.push(texto[index]);
                        }
                    }else{
                        output.push(texto[index]);
                    }
                    break;
                case 'e':
                    if(index<texto.length-4){
                        console.log("Entre a la e");
                        if("n" == texto[index+1] && "t" == texto[index+2]
                        && "e" == texto[index+3] && "r" == texto[index+4]){
                            output.push('e');
                            index=index+4;
                        }
                    }else{
                        output.push(texto[index]);
                    }
                    break;
                case 'i':
                    if(index<texto.length-3){
                        if("m" == texto[index+1] && "e" == texto[index+2]
                        && "s" == texto[index+3]){
                            output.push('i');
                            index=index+3;
                        }
                    }else{
                        output.push(texto[index]);
                    }
                    break;
                case 'o':
                    if(index<texto.length-3){
                        if("b" == texto[index+1] && "e" == texto[index+2]
                        && "r" == texto[index+3]){
                            output.push('o');
                            index=index+3;
                        }
                    }else{
                        output.push(texto[index]);
                    }
                    break;
                case 'u':
                        if(index<texto.length-3){
                            if("f" == texto[index+1] && "a" == texto[index+2]
                            && "t" == texto[index+3]){
                                output.push('u');
                                index=index+3;
                            }
                        }else{
                            output.push(texto[index]);
                        }
                        break;
                default:
                    output.push(texto[index]);
                }
            }
        ocultarimagen();
        var outputText = document.getElementById("output-text");
        outputText.value = unirarregloenstring(output);
        mostrarBoton();
        }else{
            alert("tiene mayusculas o caracteres especiales")
        }        
    }

function minusculas(StringInput){
    let stringlowercase = StringInput.toLowerCase();
    let result = stringlowercase.localeCompare(StringInput);
    if(result == 0){
        return true;
    }
    return false;
}

function caracteresespeciales(StringInput) {
    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    return format.test(StringInput);
  }

function unirarregloenstring(ArrayOfChar){
    let stringvar = "";
    for(var index = 0;index<ArrayOfChar.length;index++){
        stringvar=stringvar+ArrayOfChar[index];
    }
    return stringvar;
}

function ocultarimagen(){
    document.getElementById("imagen-muneco").style.display = "none";
    document.getElementById("texto-image-output1").style.display = "none";
    document.getElementById("texto-image-output2").style.display = "none";
}

function copiarPortapapeles() {
    /* Get the text field */
    var copyText = document.getElementById("output-text");
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
    /* Alert the copied text */
    alert("Texto Copiado: " + copyText.value);
  }

function mostrarBoton(){
    var button = document.getElementById("boton-copia-portapapeles");
    button.style.display = "block";
}
var frase = prompt("Digite uma frase");
var c = prompt("Digite uma letra");

function countChars(frase, c){
    let cont = 0;
    for(let i=0; i<frase.length; i++){
        if(frase[i] == c){
            cont++;

        }
    }

    if(cont==1){
        console.log(c, "aparece", cont, "vez na frase")
    }else{
        console.log(c, "aparece", cont, "vezes na frase");
    }
    

}

countChars(frase, c);

var palavra = prompt("Digite uma palavra para verificar se ela se classifica como um palíndromo");

var inverso = palavra.split('').reverse().join('');
    
    
     if(palavra === inverso) {
        alert("A palavra '" + palavra + "' é um palíndromo.");
    } else {
        alert("A palavra '" + palavra + "' não é um palíndromo.");
    }

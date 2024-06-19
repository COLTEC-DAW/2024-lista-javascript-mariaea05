var array = prompt("Digite uma frase");

function reverseArray(array){
    var inverso = array.split('').reverse().join('');
    return inverso;
}

console.log("o inverso da frase é: ", reverseArray(array));

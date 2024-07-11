function verificarNumero(numero, criterio) {
    return criterio(numero);
}


function impar(numero) {
    return numero % 2 !== 0;
}


function primo(numero) {
    if (numero <= 1) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false;
    }
    return true;
}


let numero = prompt("Digite um número");

console.log("O número é impar?", verificarNumero(numero, impar));
console.log("O número é primo?", verificarNumero(numero, primo));
 
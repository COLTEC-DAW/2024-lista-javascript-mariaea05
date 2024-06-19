
function mod2(number) {
    return number % 2 === 0;
}

function mod(num, mod) {
    return num % mod === 0;
}


var number = prompt("Digite um número");
console.log(mod2(number)); 

var num = prompt("Digite um número para verificar a divisibilidade:");
var divisor = prompt("Digite o divisor:");
console.log(mod(num, divisor)); 

function transforma(texto, transformacao) {
    return texto.split('').map(transformacao).join('');
}


function AltaVogais(caractere) {
    return 'aeiou'.includes(caractere.toLowerCase()) ? caractere.toUpperCase() : caractere;
}

function AltaConsoantes(caractere) {
    return 'bcdfghjklmnpqrstvwxyz'.includes(caractere.toLowerCase()) ? caractere.toUpperCase() : caractere;
}

function BaixaVogais(caractere) {
    return 'aeiou'.includes(caractere.toLowerCase()) ? caractere.toLowerCase() : caractere;
}

function BaixaConsoantes(caractere) {
    return 'bcdfghjklmnpqrstvwxyz'.includes(caractere.toLowerCase()) ? caractere.toLowerCase() : caractere;
}


let texto = prompt("Digite um texto");


console.log("Caixa alta nas vogais:", transforma(texto, AltaVogais));
console.log("Caixa alta nas consoantes:", transforma(texto, AltaConsoantes));
console.log("Caixa baixa nas vogais:", transforma(texto, BaixaVogais));
console.log("Caixa baixa nas consoantes:", transforma(texto, BaixaConsoantes));

function criptografar(texto, criterio) {
    return texto.split('').map(criterio).join('');
}

function cifraDeCesar(c, deslocamento) {
    const alfabeto = 'abcdefghijklmnopqrstuvwxyz';
    const maiusculo = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    if (alfabeto.includes(c)) {
        let novaPosicao = (alfabeto.indexOf(c) + deslocamento) % alfabeto.length;
        return alfabeto[novaPosicao];
    } else if (maiusculo.includes(c)) {
        let novaPosicao = (maiusculo.indexOf(c) + deslocamento) % maiusculo.length;
        return maiusculo[novaPosicao];
    } else {
        return c; 
    }
}


function gerarCifraDeCesar(deslocamento) {
    return function(c) {
        return cifraDeCesar(c, deslocamento);
    };
}

let texto = prompt("Digite o texto a ser criptografado");
let deslocamento = prompt("Digite o valor do deslocamento");

let textoCriptografado = criptografar(texto, gerarCifraDeCesar(deslocamento));
console.log("Texto criptografado:", textoCriptografado);

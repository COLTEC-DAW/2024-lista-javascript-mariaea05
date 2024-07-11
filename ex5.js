var a = prompt("Digite dois números");
var b = prompt();

function min(a, b){

    if(a<b){
        console.log( a, "é o menor valor entre os dois números");
    }else{
        console.log( b, "é o menor valor entre os dois números");
    }

}

min(a, b);
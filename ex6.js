var a = prompt("Digite dois números");
var b = prompt();

function max(a, b){

    if(a>b){
        console.log( a, "é o maior valor entre os dois números");
    }else{
        console.log( b, "é o maior valor entre os dois números");
    }

}

max(a, b);
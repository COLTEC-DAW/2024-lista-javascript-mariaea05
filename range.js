var min = prompt("Digite dois números, min e max, respectivamente");
var max = prompt();

function range(min, max) {
  
    let result = [];
    
  
    for (let i = min; i <= max; i++) {
        result.push(i);
    }
    
  
    return result;
}

console.log(range(min, max));  

var obj1 = {
    cor: "amarelo",
    forma: "redondo"
}

var obj2 = {
    cor: "amarelo",
    forma: "redondo"
}

function deepEquals(obj1, obj2) {

    var keys1 = Object.keys(obj1);
    var keys2 = Object.keys(obj2);

    
    if(keys1.length !== keys2.length){
        return false; push  
    }

    for(var key of keys1){
        if(!keys2.includes(key)){
            return false;
        }

        if(typeof obj1[key] === 'object' && typeof obj2[key] === 'object'){
            if(!deepEquals(obj1[key], obj2[key])) {
                return false;
            }
        } else if(obj1[key] !== obj2[key]){ 
            return false;
        }
    }

    return true;
}

console.log(deepEquals(obj1, obj2));

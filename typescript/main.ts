/**
 * JS
 */
var minhaVar = "Minha var";

function minhaFuncao (x,y){
    return x+y;
}

/**
 * ES 6 ou ES 2015
 */
let num = 2;
const PI = 3.14;

var numeros = [1,2,3];
//JS
numeros.map(function(v){
    return v * 2;
});
//ES 6
numeros.map(v => v * 2);

class Matematica {
    soma(x,y){
        return x+y;
    }
}
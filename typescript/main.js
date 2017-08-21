/**
 * JS
 */
var minhaVar = "Minha var";
function minhaFuncao(x, y) {
    return x + y;
}
/**
 * ES 6 ou ES 2015
 */
var num = 2;
var PI = 3.14;
var numeros = [1, 2, 3];
//JS
numeros.map(function (v) {
    return v * 2;
});
//ES 6
numeros.map(function (v) { return v * 2; });
var Matematica = (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());

var SomaFunc = require("./somar");
// usa o require("./") para pegar de outro arquivo .js o modulo desse arquivo, porém devem estar na mesma pasta
var SubFunc = require("./subtrair");
var DivFunc = require("./div");
var MultFunc = require("./mult");

console.log( "Soma:" + SomaFunc(1, 2) );
console.log( "Sub:" + SubFunc(1, 2) );
console.log( "Div:" + DivFunc(1, 2) );
console.log( "Mult:" + MultFunc(1, 2) );
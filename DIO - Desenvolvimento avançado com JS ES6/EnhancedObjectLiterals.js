var soma = (a, b) => a + b

string1 = "Isto é uma string"

var obj1 = {
    // coloca como campos sem precisar fazer atribuição
    // soma: soma
    soma,
    string1,
}

console.log( obj1.soma(2, 3) )
console.log( obj1.string1 )
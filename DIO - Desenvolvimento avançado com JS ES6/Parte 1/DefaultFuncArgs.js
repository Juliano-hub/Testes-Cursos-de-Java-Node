// parâmetros default
var mult = (a=9, b=10) => a*b
console.log("Valor com o B: ", mult(10, 2) )
console.log("Valor sem o B com B padrão 10: ", mult(10) )
console.log("Valor sem A e B: ", mult() )


                              // retorna um num entre 0-10
//var GerarNumAleatorio = () => Math.floor(Math.random() * 10 + 1)
var GerarNumAleatorio = () =>{ 
    // retorna um num entre 0-10
    NumAleatorio = Math.floor(Math.random() * 10 + 1)
    console.log("O num aleatório é: ", NumAleatorio)
    return NumAleatorio
}

                       // parâmetros default recebendo uma função arrow
var multAleatorio = (a, b = GerarNumAleatorio() ) => a * b

console.log(multAleatorio(5) )
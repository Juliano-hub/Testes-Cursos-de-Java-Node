// função antiga
var sumaOld = function(a, b){
    return a + b;
}

// Arrow Functions
var soma = (a, b) => a + b
                    // tem o retorno implícito

// Fazer coisas a mais na função
var somaVerifica = (a, b) =>{
    soma = a + b

    if(soma > 10)
        return true
    return false
}
console.log("É maior que 10?", somaVerifica(8, 1) )

// não precisa de parênteses se for 1 único parâmetro
var soma5 = a => a + 5


var obj ={
    showContext: function showContext(){
        // com arrow function pega todo o contexto this que está sendo envolvido pelas {}
        setTimeout(() =>{
            this.log('after 1000ms')
        }, 1000)
    },
    log: function log(value){
        console.log(value)
    }
}
obj.showContext()
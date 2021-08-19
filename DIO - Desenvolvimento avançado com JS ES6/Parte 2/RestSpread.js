// Rest Operator ...

            // pega explicitamente o primeiro e o segundo valor
            // o resto fica no vetor
const soma = (a, b, ...rest) =>{ 

    console.log(a, b, rest)
    // faz a soma
    return args.reduce((Total, ValorAtual) => Total + ValorAtual, 0)
}

// Spread Operator

const Texto1 = 'Estou testando'

function logArgs(...args){
    // spread quebra a string e passa para um vetor
    console.log(args)
}

logArgs(...Texto1)

// spread para juntar objetos

const objIdade = {
    Idade: 30
}

const Pessoa = {
    Nome: "Ava",
    ...objIdade
}

// faz um clone
const objClone = {...Pessoa}

console.log(objClone)
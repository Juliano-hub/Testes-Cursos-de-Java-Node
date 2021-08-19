const alfa = ['a', 'b', 'c']

const genero = {
    Homem: Symbol('H'),
    Mulher: Symbol('M')
}

const pessoas = [
    {
        nome: 'Gui',
        idade: 17,
        genero: genero.Homem
    },
    {
        nome: 'Ava',
        idade: 20,
        genero: genero.Mulher
    },
    {
        nome: 'Ay',
        idade: 22,
        genero: genero.Homem
    }
]

console.log('Quant: ', pessoas.length)

console.log('A var é um array?', Array.isArray(pessoas))

//forEach
pessoas.forEach( (pessoa, index) =>{
    console.log(`Nome: ${pessoa.nome} index: ${index}`)
})

//filtrar
const Homens = pessoas.filter(pessoas => pessoas.genero === genero.Homem)
console.log('Lista com Homens: ', Homens)

// filtrar par e reduce
const Operacoes = pessoas
                        .filter(pessoa => pessoa.idade % 2 === 0)
                        .reduce( (TotalIdade, pessoa) =>{
                            TotalIdade += pessoa.idade;
                            return TotalIdade
                        }, 0)

console.log('A soma das idades par: ', Operacoes)
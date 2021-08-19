let user = {
    nome: "Ava",
}

user.nome = "Outro nome"

// cria propriedade
user.sobrenome = "Avo"

console.log(user)
delete user.sobrenome
// remove propriedade
console.log(user)

let teste = {
    nome: "teste1",
    sobrenome: "teste2"
}

console.log("Propriedades: " + Object.keys(teste) )
console.log("Valores: " + Object.values(teste) )
console.log("Propriedades e valores junto: " + Object.entries(teste) )

// Merge propriedades de objetos
user = Object.assign(user, {Idade: 30})
console.log(user)

// faz o objeto virar uma constante
Object.freeze(teste)
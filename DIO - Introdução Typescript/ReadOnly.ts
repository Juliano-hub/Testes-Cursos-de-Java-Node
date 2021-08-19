interface AnimaDomestico{
    readonly nome: string,
    readonly idade: number
}

class cachorro implements AnimaDomestico, CachorroSomenteLeitura {
    idade
    nome

    constructor(nome, idade){
        this.nome  = nome,
        this.idade = idade
    }
}

type CachorroSomenteLeitura = {
    readonly [K in keyof cachorro]: cachorro[K]
}

const cao = new cachorro('Ava', 20)
              // obriga os parâmetros a ser do tipo escrito
const soma = (a:number, b:number) => a+b

console.log( soma(5, 5) )

// dá erro por não ser int
//soma('a', 'b') 


// interface

interface IAnimal{
    nome: string
    tipo: 'terrestre' | 'aquatico'
    domestico: boolean
}

interface IFelino extends IAnimal{}

// type
type IDomestico = ICanino | IFelino

interface ICanino extends IAnimal{
    porte: 'pequeno' | 'medio' | 'grande'
}

const animal: IDomestico = {
    domestico: true,
    nome: 'chachorro',
    porte: 'medio',
    tipo: 'terrestre'
}
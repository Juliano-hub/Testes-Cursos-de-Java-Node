// Omit
interface Pessoa{
    nome: string,
    idade: number,
    nacionalidade: string
}

// Brasileiro não vai ter o campo nacionalidade
type Brasileiro = Omit < Pessoa, 'nacionalidade' >

const Brasileiro: Brasileiro = {
    nome: 'Ava',
    idade: 20
}
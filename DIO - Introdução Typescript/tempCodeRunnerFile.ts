// Generic Types

const adicionarAoFim = (array: any[], valor: any) => {
    
    return array.map(item => item + valor)
}

console.log( adicionarAoFim([1, 2, 3], 99) )
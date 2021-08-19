// Symbols, identificador único

const ID = Symbol('Hello')
const ID2 = Symbol('Hello')

console.log(ID === ID2)


// Generators
function* hello(value){
    console.log('Ola')
    yield
    console.log('de')
    yield
    // yield pausa e execução
}

const atual = hello()

console.log(atual.next())
console.log(atual.next())

function* num(){
    let numero = 0
    while(true){
        yield numero
        numero++
    }
}

const it = num()
console.log(it.next())
console.log(it.next())
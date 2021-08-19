// EventEmitter

const EventEmitter = require('events')

// extendendo a classe

class Users extends EventEmitter{
    userLogger(data){
        setTimeout(() => {
            this.emit('User logged', data)
        }, 2000)
    }
}
const Usuario = new Users()

Usuario.on('User logged', data =>{
    console.log(data)
})

Usuario.userLogger({user: 'Ava'})
Usuario.userLogger({user: 'Uva'})

// normal


//const emitter = new EventEmitter()

//emitter.on('User logged', data =>{
//    console.log(data)
//})

//emitter.emit('User logged', {user: 'Ava'})
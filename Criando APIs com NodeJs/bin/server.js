const app = require('../src/app');

const http = require('http');
const degub = require('debug')('nodestr:server');

const port = normalizePort(process.env.PORT ||'3000');
// com o process.env.PORT ele pega uma porta disponível 
// verfifica com o normalizePort se é uma port disponível

app.set('port', port);
// vai fazer o set da porta

const server = http.createServer(app);  
// cria o servidor

server.listen(port);
// o servidor vai ouvir a porta que foi dada em cima

server.on('error', onError);
// mostra os error de servidor

console.log("O servidor rodando na URL http://localhost:" + port);

function normalizePort(val){
    const port = parseInt(val ,10);
    // tenta converter o valor de entrada para um inteiro

    if(isNaN(port)){
        // se não for um número
        return val;
    }

    if(port >= 0){
        return port;
    }

    return false;
}

function onError(error){
                // o erro do servidor
    if(error.syscall !== 'listen'){
        throw error;
    }

    const bind = typeof port === 'string' ?
        'pipe ' + port :
        'port ' + port;

    switch(error.code){
        case 'EACCES':
            // erro de permissão
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            // erro de endereço em uso
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        }

}
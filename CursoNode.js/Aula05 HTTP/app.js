var http = require('http');
// para criar aplicações backend, é o módulo padrão do Node

http.createServer( function(rec, res){

    res.end("Ola, bem vindo ao meu primeiro site!");

} ).listen(8081);
// o createServer() cria o servidor, já o listen( X ) abre na porta do valor desse X, assim ele cria o servidor com esse comando

console.log("O servidor rodando!");


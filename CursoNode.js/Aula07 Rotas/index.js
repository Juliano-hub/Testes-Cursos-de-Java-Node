const express = require("express");
// coloca const para evitar de sobrescrever

const app = express();
// cria uma cópia inteira do framework para essa var app(usar as coisas do express a partir da var app)
// coloca const para evitar de sobrescrever


app.get("/", function(req, res){
    // res = objeto que se usa para mandar mensagem para o cliente
    res.send("Seja bem vindo ao meu primeiro servidor criado com o Express");
    // a mensagem aparece na tela
});

app.get("/sobre",function(req, res){
    // res = objeto que se usa para mandar mensagem para o cliente
    res.send("Voce esta na aba: sobre!");
    // a mensagem aparece na tela
});

app.get("/blog",function(req, res){
    // res = objeto que se usa para mandar mensagem para o cliente
    res.send("Voce esta na aba: blog!");
    // a mensagem aparece na tela
});

// DEVE SER A ÚLTIMA LINHA DO CÓDIGO
// localhost:8081
app.listen(8081, function(){

    console.log("O servidor rodando na URL http://localhost:8081");

});
// cria o servidor, com o (X) sendo a porta

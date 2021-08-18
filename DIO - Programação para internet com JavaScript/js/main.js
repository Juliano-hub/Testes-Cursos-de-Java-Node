
function BotaoApertado(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>"
    //alert("Vlw por apertar!")
}

function Redirecionar(){
    window.open("https://www.google.com.br")
    // em outra aba
    //window.location.href = "https://www.google.com.br"
    // na mesma aba
}

function PassarMouse(elemento){
    elemento.innerHTML = "Vlw por passar o mouse"
}

function TirarMouse(elemento){
    elemento.innerHTML = "Passe o mouse aqui"
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

/*
var validar
function ValidaIdade(idade){
    if(idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar
}

var idade = prompt("Qual sua idade?")
alert("É maior de idade: " + ValidaIdade(idade) )

function soma(n1, n2){
    return n1 + n2
}

alert(soma(5, 5))
/*

/*
var d = new Date()
alert( d.getDate() )
/*

/*
var count = 5
while(count < 5){
    console.log(count)
    count++
}
/*

/*
var idade = prompt("Qual sua idade?")
if(idade >= 18){
    alert("Maior de idade")
}else{
    alert("Menor de idade")
}
*/

/*
var fruta = [{nome:"Uva", cor:"roxa"}, {nome:"Morango", cor:"vermelho"}] 
console.log(fruta)
console.log("/Nome: " + fruta[0].nome + " /Cor: " + fruta[0].cor)
console.log("/Nome: " + fruta[1].nome + " /Cor: " + fruta[1].cor)
*/

/*
var lista = ["banana", "maça", "uva"]
lista.push("abacaxi")
alert("printando só o: " + lista[lista.length - 1])
lista.pop("abacaxi")
console.log(lista.join("/"))
console.log("Printando em string: " + lista.toString())
*/

/*
var nome = "testando"
alert("Estou " + nome)
num1 = 30
num2 = 60
console.log(num1 + num2)
frase = "Isso é uma frase"
console.log( frase.replace("frase", "replace") )
*/
const texto = "texto"

tamTexto = texto.length
console.log(`O tamanho é: ${tamTexto}`)

const cortado = texto.split("X");
console.log(`Cortado: ${cortado}`)

const trocado = texto.replace("tex", "vux")
console.log(`Trocar: ${trocado}`)

const last = texto.slice(-1)
console.log(`Último char: ${last}`)
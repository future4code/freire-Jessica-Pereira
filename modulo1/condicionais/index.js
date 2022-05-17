//exercicio de interpretação

//exercicio 1
//a)ele verifica se o numero que a pessoa digitou é par, no caso o resto da divisão por 2 é igual a 0
//b)para numeros pares
//c) numeros impares

//exercicio 2
//a)serve para o cliente escolher uma fruta e o codigo dizer quanto custa a fruta
//b) O preço da fruta maçã é R$ 2.25
//c) iria imprimir tudo que está escrito a partir de pêra

//erxercicio 3
//a) está criando uma variavel onde é perguntado para o usuario o primeiro numero
//b) se digitar 10 vai aparecer a mensagem "Esse número passou no teste"
//se digitar -10 não vai acontecer nada
//c)vai aparecer o erro que a variavel mensagem não está definida, pois ela está dentro da condicional, e não está no escopo global


//exercicio de escrita

//exercicio 1

/* let idadeDirigir =Number (prompt("Qual a sua idade?"))

if (idadeDirigir >= 18) {
    console.log ("Sim, você pode digirir")
}else{
    console.log ("Você não pode dirigir")
} */

//exercicio 2

/* let turno = prompt ("Em que turno você estuda? M=matutino/ V=Vespertino / N=Noturno").toLowerCase()

if (turno==="m") {
    console.log ("Bom dia")
} else if (turno==="v") {
    console.log("Boa tarde")
} else if (turno==="n") {
    console.log ("Boa noite")
} else {
    console.log ("Digite uma resposta válida: M, V ou N")
} */

//exercicio 3
/* let turnoAula = prompt ("Em que turno você estuda? M=matutino/ V=Vespertino / N=Noturno").toLowerCase()

switch (turnoAula) {
    case "m":
        console.log ("Bom dia")
        break;
    case "v":
        console.log ("Boa tarde")
        break;
    case "n":
        console.log ("Boa noite")
        break;
    default:
        console.log ("Digite uma resposta válida: M, V ou N ")
        break;
} */


//exercicio 4

/* let generoFilme = prompt ("Qual o genero do filme?").toLocaleLowerCase()
let precoFilme =Number(prompt("Qual o valor do ingresso?"))

if (generoFilme==="fantasia" && precoFilme<=15) {
    console.log ("Bom filme")
}else {
    console.log ("Escolha outro filme")
}

//desafios
//desafio1
let lanche = prompt ("Qual lanche você vai comprar?").toLowerCase()
switch (lanche) {
    case "pipoca":
        console.log ("Aproveite sua pipoca")
        break;
    case "chocolate":
        console.log ("Aproveite seu chocolate")
        break;
    case "salgadinho":
        console.log ("Aproveite seu salgadinho")
        break;
    default:
        break;
} */

//desafio2

let nome = prompt ("Qual seu nome completo?")
let tipoJogo = prompt ("Qual o tipo de jogo? IN=internacional; e DO=doméstico;").toLowerCase()
let etapa = prompt ("Qual etapa do jogo? SF=semi-final; DT=decisão de terceiro lugar; e FI=final").toLowerCase()
let categoria =Number (prompt("Qual categoria? 1,2,3 ou 4"))
let ingressosQuantidade =Number (prompt ("Quantidade de ingressos?"))

const semiFinais ={
    categoria1: 1320,
    categoria2: 880,
    categoria3: 550,
    categoria4: 220
}

const terceiroLugar={
    categoria1: 660,
    categoria2: 440,
    categoria3: 330,
    categoria4: 170
}

const final = {
    categoria1: 1980,
    categoria2: 1320,
    categoria3: 880,
    categoria4: 330
}

console.log ("---Dados da compra---") 
console.log (`Nome do cliente: ${nome}`)


//tipo de jogo
if (tipoJogo==="in") {
    console.log ("Tipo de jogo: Internacional")
}else if (tipoJogo==="do") {
    console.log ("Tipo de jogo: Nacional")
} else{
    console.log ("Tipo de jogo não identificado")
}


//etapa
if (etapa==="sf") {
    console.log ("Etapa jogo: Semi final")
} else if (etapa==="dt"){
    console.log ("Etapa do jogo: Decisão do terceiro Lugar")
} else if(etapa==="fi"){
    console.log ("Etapa do jogo: Final")
} else{
    console.log ("Etapa do jogo: Não indentificada")
}
   
//categoria
if (categoria===1) {
    console.log ("Categoria: 1")
} else if (categoria===2){
    console.log ("Categoria: 2")
}else if (categoria===3){
    console.log ("Categoria: 3")
} else if (categoria===4){
    console.log ("Categoria: 4")
}

console.log (`Quantidade de ingressos: ${ingressosQuantidade}`)
console.log ("---Valores---")

//valor do ingresso
if (tipoJogo==="do" && etapa==="sf" && categoria===1) {
    console.log (`Valor do ingresso:R$ ${semiFinais.categoria1}`)
}else if (tipoJogo ==="do" && etapa === "sf" && categoria===2){
    console.log (`Valor do ingresso: R$ ${semiFinais.categoria2}`)
} else if (tipoJogo ==="do" && etapa === "sf" && categoria===3){
    console.log (`Valor do ingresso: R$ ${semiFinais.categoria3}`)
} else if(tipoJogo ==="do"&& etapa === "sf" && categoria===4){
    console.log (`Valor do ingresso: R$ ${semiFinais.categoria4}`)
} else if (tipoJogo ==="do" && etapa === "dt" && categoria===1){
    console.log (`Valor do ingresso: R$ ${terceiroLugar.categoria1}`)
}else if (tipoJogo ==="do" && etapa === "dt" && categoria===2){
    console.log (`Valor do ingresso: R$ ${terceiroLugar.categoria2}`)
}else if (tipoJogo ==="do" && etapa === "dt" && categoria===3){
    console.log (`Valor do ingresso: R$ ${terceiroLugar.categoria3}`)
}else if  (tipoJogo ==="do" && etapa === "dt" && categoria===4){
    console.log (`Valor do ingresso: R$ ${terceiroLugar.categoria4}`)
} else if (tipoJogo ==="do" && etapa === "fi" && categoria===1){
    console.log (`Valor do ingresso: R$ ${final.categoria1}`)
}else if (tipoJogo ==="do" && etapa === "fi" && categoria===2){
    console.log(`Valor do ingresso: R$ ${final.categoria2}`)
}else if (tipoJogo==="do" && etapa === "fi" && categoria===3){
    console.log(`Valor do ingresso: R$ ${final.categoria3}`)
}else if (tipoJogo ==="do" && etapa === "fi" && categoria===4){
    console.log (`Valor do ingresso: R$ ${final.categoria4}`)
}else if (tipoJogo==="in" && etapa==="sf" && categoria===1) {
    console.log (`Valor do ingresso:R$ ${semiFinais.categoria1}`)
}else if (tipoJogo ==="in" && etapa === "sf" && categoria===2){
    console.log (`Valor do ingresso: R$ ${semiFinais.categoria2}`)
} else if (tipoJogo ==="in" && etapa === "sf" && categoria===3){
    console.log (`Valor do ingresso: R$ ${semiFinais.categoria3}`)
} else if(tipoJogo ==="in"&& etapa === "sf" && categoria===4){
    console.log (`Valor do ingresso: R$ ${semiFinais.categoria4}`)
} else if (tipoJogo ==="in" && etapa === "dt" && categoria===1){
    console.log (`Valor do ingresso: R$ ${terceiroLugar.categoria1}`)
}else if (tipoJogo ==="in" && etapa === "dt" && categoria===2){
    console.log (`Valor do ingresso: R$ ${terceiroLugar.categoria2}`)
}else if (tipoJogo ==="in" && etapa === "dt" && categoria===3){
    console.log (`Valor do ingresso: R$ ${terceiroLugar.categoria3}`)
}else if  (tipoJogo ==="in" && etapa === "dt" && categoria===4){
    console.log (`Valor do ingresso: R$ ${terceiroLugar.categoria4}`)
} else if (tipoJogo ==="in" && etapa === "fi" && categoria===1){
    console.log (`Valor do ingresso: R$ ${final.categoria1}`)
}else if (tipoJogo ==="in" && etapa === "fi" && categoria===2){
    console.log(`Valor do ingresso: R$ ${final.categoria2}`)
}else if (tipoJogo==="in" && etapa === "fi" && categoria===3){
    console.log(`Valor do ingresso: R$ ${final.categoria3}`)
}else if (tipoJogo ==="in" && etapa === "fi" && categoria===4){
    console.log (`Valor do ingresso: R$ ${final.categoria4}`)
}else{
    console.log("Escolha um valor valido");
}


//valor total
if (tipoJogo==="do" && etapa==="sf" && categoria===1) {
    console.log (`Valor do ingresso:R$ ${semiFinais.categoria1*ingressosQuantidade}`)
}else if (tipoJogo ==="do" && etapa === "sf" && categoria===2){
    console.log (`Valor do ingresso: R$ ${semiFinais.categoria2*ingressosQuantidade}`)
} else if (tipoJogo ==="do" && etapa === "sf" && categoria===3){
    console.log (`Valor do ingresso: R$ ${semiFinais.categoria3*ingressosQuantidade}`)
} else if(tipoJogo ==="do"&& etapa === "sf" && categoria===4){
    console.log (`Valor do ingresso: R$ ${semiFinais.categoria4*ingressosQuantidade}`)
} else if (tipoJogo ==="do" && etapa === "dt" && categoria===1){
    console.log (`Valor do ingresso: R$ ${terceiroLugar.categoria1*ingressosQuantidade}`)
}else if (tipoJogo ==="do" && etapa === "dt" && categoria===2){
    console.log (`Valor do ingresso: R$ ${terceiroLugar.categoria2*ingressosQuantidade}`)
}else if (tipoJogo ==="do" && etapa === "dt" && categoria===3){
    console.log (`Valor do ingresso: R$ ${terceiroLugar.categoria3*ingressosQuantidade}`)
}else if  (tipoJogo ==="do" && etapa === "dt" && categoria===4){
    console.log (`Valor do ingresso: R$ ${terceiroLugar.categoria4*ingressosQuantidade}`)
} else if (tipoJogo ==="do" && etapa === "fi" && categoria===1){
    console.log (`Valor do ingresso: R$ ${final.categoria1*ingressosQuantidade}`)
}else if (tipoJogo ==="do" && etapa === "fi" && categoria===2){
    console.log(`Valor do ingresso: R$ ${final.categoria2*ingressosQuantidade}`)
}else if (tipoJogo==="do" && etapa === "fi" && categoria===3){
    console.log(`Valor do ingresso: R$ ${final.categoria3*ingressosQuantidade}`)
}else if (tipoJogo ==="do" && etapa === "fi" && categoria===4){
    console.log (`Valor do ingresso: R$ ${final.categoria4*ingressosQuantidade}`)
}else if (tipoJogo==="in" && etapa==="sf" && categoria===1) {
    console.log (`Valor do ingresso:R$ ${semiFinais.categoria1*ingressosQuantidade*4.10}`)
}else if (tipoJogo ==="in" && etapa === "sf" && categoria===2){
    console.log (`Valor do ingresso: R$ ${semiFinais.categoria2*ingressosQuantidade*4.10}`)
} else if (tipoJogo ==="in" && etapa === "sf" && categoria===3){
    console.log (`Valor do ingresso: R$ ${semiFinais.categoria3*ingressosQuantidade*4.10}`)
} else if(tipoJogo ==="in"&& etapa === "sf" && categoria===4){
    console.log (`Valor do ingresso: R$ ${semiFinais.categoria4*ingressosQuantidade*4.10}`)
} else if (tipoJogo ==="in" && etapa === "dt" && categoria===1){
    console.log (`Valor do ingresso: R$ ${terceiroLugar.categoria1*ingressosQuantidade*4.10}`)
}else if (tipoJogo ==="in" && etapa === "dt" && categoria===2){
    console.log (`Valor do ingresso: R$ ${terceiroLugar.categoria2*ingressosQuantidade*4.10}`)
}else if (tipoJogo ==="in" && etapa === "dt" && categoria===3){
    console.log (`Valor do ingresso: R$ ${terceiroLugar.categoria3*ingressosQuantidade*4.10}`)
}else if  (tipoJogo ==="in" && etapa === "dt" && categoria===4){
    console.log (`Valor do ingresso: R$ ${terceiroLugar.categoria4*ingressosQuantidade*4.10}`)
} else if (tipoJogo ==="in" && etapa === "fi" && categoria===1){
    console.log (`Valor do ingresso: R$ ${final.categoria1*ingressosQuantidade*4.10}`)
}else if (tipoJogo ==="in" && etapa === "fi" && categoria===2){
    console.log(`Valor do ingresso: R$ ${final.categoria2*ingressosQuantidade*4.10}`)
}else if (tipoJogo==="in" && etapa === "fi" && categoria===3){
    console.log(`Valor do ingresso: R$ ${final.categoria3*ingressosQuantidade*4.10}`)
}else if (tipoJogo ==="in" && etapa === "fi" && categoria===4){
    console.log (`Valor do ingresso: R$ ${final.categoria4*ingressosQuantidade*4.10}`)
}else{
    console.log("Escolha um valor valido");
}

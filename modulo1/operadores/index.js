//Interpretação

//exercicio 1

/* primeiro criamos 3 variaveis e lhes atribuimos valores 
booleanos, depois criamos a variavel 
resultado de bool1 && bool2 para comparar, 
como uma é true e a outra false o resultado será false.
a segundo é comparando as 3 variaveis, e como tem false em algumas
o resultado no console será falso.
na terceira usamos o comando ||, e como as duas são diferentes 
o resultado é true (só seria false se todas fossem)
E na última usamos o typeof pra saber que tipo de valor é, 
que no caso é booleano */


/*const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

console.log("d. ", typeof resultado)*/

//exercicio 2/3
/* aqui o programa está concatenando, interpretando os dois números
como textos, só que não sei como arrumar */

/*let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)*/

//exercicio de escrita

//exercicio 1

/*let idade = prompt ("Qual a sua idade?")
let idadeAmigo  =  prompt ("Qual a idade do seu melhor amigo?")
let resultado = idade > idadeAmigo
console.log ("Qual a sua idade?", idade)
console.log ("Qual a idade do seu melhor amigo?", idadeAmigo)
console.log ("Sua idade é maior do que a do seu melhor amigo?", resultado)
console.log ("diferença de idade: ", idade - idadeAmigo)*/

//exercicio 2

/*let numero = prompt ("Digite um número par")
console.log ("Número par: ", numero)
const restoDaDivisão = numero % 2
console.log ("Resto da divisão", restoDaDivisão)*/

//exercicio 3

/*3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 
    
    a) A idade do usuário em meses
    
    b) A idade do usuário em dias
    
    c) A idade do usuário em horas*/

/*let idade = prompt ("Qual a sua idade?")
let idadeMeses = (idade * 12)
let idadeDias = (idadeMeses * 365)
let idadeHoras = (idadeDias *24)

console.log ("Sua idade: ", idade)
console.log ("Sua idade em meses: ", idadeMeses)
console.log ("Sua idade em dias: ", idadeDias)
console. log ("Sua idade em horas: ", idadeHoras)*/

let primeiroNumero = prompt ("Digite um número")
let segundoNumero = prompt ("Digite outro número")

console.log ("O primeiro numero é maior que segundo?", primeiroNumero > segundoNumero)
console.log ("O primeiro numero é igual ao segundo?", primeiroNumero === segundoNumero)
console.log ("O primeiro numero é divisível pelo segundo?",primeiroNumero % segundoNumero === 0)
console.log ("O segundo numero é divisível pelo primeiro?",segundoNumero % primeiroNumero === 0)



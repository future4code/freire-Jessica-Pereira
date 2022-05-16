/* Exercicio de interpretação */

// exercicio 1

//Será impresso no console Matheus Nachtergaele
//depois Virginia Cavendish epor último "Globo 14h" (item )
 //da lista de transmissoesHoje
/* const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])  */

//exercicio 
//a) {nome: 'Juca', idade: 3, raca: 'SRD'}
/*   {nome: 'Juba', idade: 3, raca: 'SRD'}
     {nome: 'Jubo', idade: 3, raca: 'SRD'} */
     //b) o (...) substitui a informação anterior
/* const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga) */


//exercicio 3
//a) vai imprimir o booleano false
//b) vai dar undefined pois não foi criado essa caracteristica dentro do objeto
/* function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura")) */



/* exercicio de escrita */
//exercicio 1
//A
/* const pessoa ={
    nome: "Jéssica",
    apelidos: ["Jéssi", "Nymeria", "mentira"]
}

function comoChamar (pessoa) {
    return console.log (`Eu sou ${pessoa.nome}, mas pode me chamar de: 
    ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]}, ${pessoa.apelidos[2]}`)
}

comoChamar (pessoa)

//B
const novosApelidos = {
    ...pessoa,
    apelidos: ["Pequena", "Princesa", "Chata"]
}

comoChamar (novosApelidos) */

//Exercicio 2
const pessoa1= {
    nome:"Jessica",
    idade: 29,
    profissao: "programadora"
}

const pessoa2= {
    nome: "Diego",
    idade: 28,
    profissao: "impressor"
}
//função 1
function pessoas (pessoa1){
 let lista =[pessoa1.nome,pessoa1.nome.length, pessoa1.idade, pessoa1.profissao, pessoa1.profissao.length]
    console.log (lista)
}
pessoas (pessoa1)
//função 2
pessoas (pessoa2)



//exercicio 3

let carrinho = []

const fruta1 = {
    nome: "maçã",
    disponibilidade: true
}

const fruta2 = {
    nome: "banana",
    disponibilidade: true
}

const fruta3 = {
    nome: "mamão",
    disponibilidade: false
}

carrinho.push (fruta1)
carrinho.push (fruta2)
carrinho.push (fruta3)

console.log (carrinho)

//Desafios
function pergunte (nome, idade, profissao){
   const perguntas = {
       nome: prompt ("Qual o seu nome?"),
       idade: prompt ("Qual a sua idade?"),
       profissao: prompt ("Qual sua profissao?")
   }
   console.log (perguntas)
   console.log (typeof(perguntas))
}
pergunte()

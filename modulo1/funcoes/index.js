//Exercícios de interpretação de código
//_________ Exercicio 1 _____________

/* a)aqui foi criada a função onde a variavel é multiplicada por 5
b) a função continuaria a mesma, mas não seria impresso no console*/

/*function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10)) */

//________ Exercicio 2________
/*a) a prompt pede para o usuario insegui um texto e ela é salva em uma variavel.
a função pede pro texto ser escrito em letras minusculas e o includes é um booleano
que serve pra dizer se os caracteres correspondem a palavra citada.
depois criamos uma variavel que é a junção da frase criada pelo usuario mais o booleano
depois no console.log é impresso essa variavel
b)    i.   eu gosto de cenoura true
     ii.  cenoura é bom pra vista true
     iii. cenouras crescem na terra false

/*let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)*/


//EXERCICIO DE ESCRITA


//exercicio 1

//a)
/*function formatar () {
    let frase = `Eu sou Jessica, tenho 29 anos, moro em Santa Catarina e sou estudante.`
return frase
}

let resultado =formatar()
console.log (resultado)*/

//b)
/*function pessoa (nome, idade, cidade, profissao) {
    nome = "Jessica"
    idade = 29
    cidade = "Tubarão"
    profissao = "costureira"
    
    return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`
}
let souEu = pessoa()
console.log (souEu)

//2. A)

function calculo (num1, num2) {
   num1 = 10
   num2 = 5
   let soma = (num1 + num2)
    return soma
}

let resultado = calculo()
console.log (resultado)

//b)
function conta (valor1, valor2) {
valor1 = 15
valor2 = 21
return valor1 >= valor2
}

let booleano = conta()
console.log (booleano)


//c)
function par (nu) {
    nu = 4
   let pares = (nu%2) === 0
   return pares

}

let matematica = par()
console.log (matematica)

//d)
//CAIXA ALTA
function letras (string) {
string = ("Meu nome é Jessica")
string = string.toUpperCase()


return string
}

let frase = letras()
console.log (frase)
//tamanho
function tamanho (fonte) {
    fonte = ("Meu nome é Jessica")
    fonte = fonte.length
    
    
    return fonte
    }

    let disse = tamanho()
console.log (disse)*/



//exercicio 3
let valo = Number (prompt ("Digite um número"))
let valo2 = Number (prompt ("Digite outro número"))

function calculadora(soma,subtracao, divisao, multiplicacao ) {
soma = (valo + valo2)
subtracao = (valo - valo2)
divisao = (valo/valo2)
multiplicacao = (valo*valo2)
let resultado = (`soma é ${soma}, subtração é ${subtracao}, divisão é ${divisao} e multiplicação é ${multiplicacao} .`)
return resultado
}

let acabou = calculadora()
console.log ("Números inseridos", valo, ",", valo2)
console.log (acabou)

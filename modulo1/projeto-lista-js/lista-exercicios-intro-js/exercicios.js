// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura, largura) {
  // implemente sua lógica aqui
altura =Number(prompt("Diga a altura do retangulo"))
largura =Number(prompt("Diga a largura do retangulo"))
const resultadoRetangulo = altura*largura
console.log (resultadoRetangulo)
}

// EXERCÍCIO 02
function imprimeIdade(anoA, anoN) {
  // implemente sua lógica aqui
anoA =Number(prompt("Qual o ano atual?"))
anoN = Number(prompt("Em que ano você nasceu?"))
const idade= anoA - anoN
console.log (idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
const imcPeso = peso/ (altura*altura)
return imcPeso
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome, idade, email) {
  // implemente sua lógica aqui
  nome = prompt ("Qual seu nome?")
  idade = prompt ("Qual sua idade?")
  email = prompt ("Qual o seu email?")
  console.log (`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas(cor1, cor2, cor3) {
  // implemente sua lógica aqui
cor1= prompt ("Diga uma cor favorita")
cor2 = prompt ("Diga outra cor favorita")
cor3 = prompt ("diga mais uma cor favorita")
const cores = [cor1, cor2,cor3]
console.log (cores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
const retornaMa= string.toUpperCase()
return retornaMa
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
const quantIng = custo/valorIngresso
return quantIng
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
string1 = string1.length
string2 = string2.length
return string1 === string2
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

  return array [0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
return array[array.length -1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
const tamanho = array.length
const primeiro = array[0]
array[0] = array[tamanho-1]
array[tamanho-1] = primeiro


return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  string1 = string1.toUpperCase()
  string2 = string2.toUpperCase()
return string1 === string2
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}
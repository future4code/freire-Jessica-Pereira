//exercicio 1 de leitura de leitura de codigo
/*aqui vemos a criação de duas variaveis, a variavel 'a' e a variavel 'b' e dados valores para eles
mas como foi dado o comando let os valores podem mudar.
Logo em seguida foi usado o comando de imprimir no console a variavel b
logo a seguir foi trocado o valor da variavel b para o numero 5
e então foi impresso no console com o comando as variaveis a, b 

    /*let a = 10
    let b = 10

    console.log(b)

    b = 5
    console.log(a, b) */

//exercicio 2
/*aqui criamos as variaveis a e b e lhes atribuimos valores
como foi criado com o comando let, elas podem ser alteradas
 em seguidas dizemos que o valor de 'c' é igual a 'a', que o valor de 'b' igual a 'c'
 e que o valor de 'a' é igual a 'b', ou seja todos são o valor 10 de 'a'
 e no final usamos o comando de imprimir no console as variaveis a, b e c*/

    /*let a = 10
    let b = 20
    c = a
    b = c
    a = b

    console.log(a, b, c)*/
    

// exercicio 3
/*aqui criamos um calculo de quanto ganhamos por hora trabalhada.
a variavel p de quantidade de horas trabalhadas poderia se chamar horasTrabalhadas
a variavel t do valor por hora trabalhada poderia se chamar ganhoHora
no final vemos o comando alert, onde vai aparecer na tela o valor do calculo
t/p (o quanto a pessoa ganha por dia divido por quantas horas ela trabalha) mais o sifrão */

/*let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)*/


//exercicio de escrita de codigo
//exercicio 1
    const nome = "Jessica"
    const idade = 29

    console.log (typeof nome, idade)
/*como não foi atribuido valor apareceu 'undefined' 
ps:tive dificuldade com o typeoff*/

    console.log ( "Ola ", nome , ",você tem ", idade , " anos") 

//exercicio 2

let resposta1 = prompt ("Você está usando uma roupa azul hoje?")
let resposta2 = prompt ("Você já comeu hoje?")
let resposta3 = prompt ("Você já tomou água hoje?")
    console.log ("Você está usando uma roupa azul hoje?", resposta1)
    console.log ("Você já comeu hoje?", resposta2)
    console.log ("Você já tomou água hoje?", resposta3)

//exercicio 3

let a = 10
let b = 25
c = a
a = b
b = c 

console.log (" O novo valor de a é", a)
console.log ("O novo valor de b é", b)

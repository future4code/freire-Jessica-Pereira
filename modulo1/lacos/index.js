//----exercicio de interpretação---

// exercicio 1

// exercicio 2
/* a)está pedindo os numeros que são maior que 18 dentro da array, 
então vai imprimir somente esses numeros
b) 
*/
// --- exercicio 3
/* tive que testar pra saber. O prompt pede o numero de linhas que será impresso.
e em cada linha será impresso um "*" mais um na proxima linha, até atingir "****"
na quarta linha*/ 


// ---- exercicio de escrita

//exercicio 1
//a) precisei de ajuda pra conseguir fazer
/* let animalEstimacao =Number(prompt("Quantos animais de estimação você tem?"))
let quantAnimais = animalEstimacao
let nomesAnimais=[]

if (animalEstimacao===0){
   console.log ("Que pena! Você pode adotar um pet!")
} else if (quantAnimais>0){
    let i=0
    while (i<quantAnimais){
    nomesAnimais[i]= prompt ("Qual o nome do se animalzinho?")

    i++
    }
    console.log (nomesAnimais)
} */

//exercicio 2
//a)
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

/* for (const numero of array){
    console.log (numero)
}  */

//b)
/* for (const numero of array){
    console.log (numero/10)
} */

//c
let pares =[]
for (const numero of array){
    if (numero%2===0){
        pares.push(numero)
    }
}
console.log (pares)
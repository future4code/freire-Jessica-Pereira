//exercicios de interpretação
// -----exercicio 1-----
// vai ser impresso cada item individualmente, 
//com seu respectivo indice, e depois a array completa

//---- exercicio 2-----
//vai ser impresso somente o primeiro item nome

// exercicio 3
// vai imprimir todos os itens que são diferentes de chijo

//exercicio de escrita
//----exercicio 1 -----
/* const pets = [
    { nome: "Lupin", raca: "Salsicha" },
    { nome: "Polly", raca: "Lhasa Apso" },
    { nome: "Madame", raca: "Poodle" },
    { nome: "Quentinho", raca: "Salsicha" },
    { nome: "Fluffy", raca: "Poodle" },
    { nome: "Caramelo", raca: "Vira-lata" },
]
 */
//a)
/* const nomesDogs = pets.map ((pets) =>{
    return pets.nome
}
)

console.log (nomesDogs)

//b)
const salsichinha= pets.filter ((pets)=>{
    if (pets.raca === "Salsicha"){
        return true
    }
})

console.log (salsichinha) */

//c)

/* const poodles = pets.filter((pets)=>{
    if (pets.raca ==="Poodle"){
        return true
    }
})

const mgsDesconto = poodles.map ((pets)=>{
    
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${pets.nome}`
})
console.log (mgsDesconto) */

// ---- exercicio 2-----
/* const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
] */
//a)
/*  const listaMercado = produtos.map((produtos)=>{
    return produtos.nome
 })

 console.log (listaMercado)
//b)
 const descontoMercado = produtos.map ((produtos)=>{
     let desconto = produtos.preco*0.95
    return {produtos: produtos.nome, preco: desconto}

 })

 console.log (descontoMercado) */

//c)
/*  const bebidasMercado = produtos.filter ((produtos)=>{
     if (produtos.categoria === "Bebidas"){
            return true
     }
 })

 console.log (bebidasMercado) */

//d) 
/*  const limpeza = produtos.filter ((produtos)=>{
     if (produtos.nome.includes("Ypê")){
         return true
     }
 })

 console.log (limpeza) */

//e)

/* const frase = produtos.map((produtos) => {
    return `Compre ${produtos.nome} por ${produtos.preco}`
})

console.log(frase) */

// desafios
// desafio 1
const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
]

const ordemAlfabetica = pokemons.map((pokemons) => {

    return pokemons.nome
})
console.log(ordemAlfabetica.sort())



const tipos = pokemons.map((pokemons) => {
    return pokemons.tipo
})

let novosTipos=[...new Set (tipos)]

console.log(novosTipos)

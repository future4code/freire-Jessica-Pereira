/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Boas vindas ao jogo de Blackjack!")

let jogo = confirm("Quer iniciar o jogo?")
if (jogo)  {
   let cartaUsuario1 =comprarCarta();
   let cartaUsuario2 = comprarCarta();
   let cartasComputador1 = comprarCarta();
   let cartasComputador2= comprarCarta();

   let pontosUsuario = cartaUsuario1.valor +cartaUsuario2.valor
   let pontosComputador = cartasComputador1.valor + cartasComputador2.valor

   console.log (`Suas cartas são ${cartaUsuario1.texto} e ${cartaUsuario2.texto}. A soma é ${pontosUsuario}`)
   console.log (`As cartas do computador são ${cartasComputador1.texto} e ${cartasComputador2.texto}. A soma é ${pontosComputador}`)

      if(pontosUsuario === pontosComputador){
      console.log ("Empate")
    
      }else if(pontosComputador > pontosUsuario){
       console.log ("O computador ganhou!")
    
      }else if(pontosComputador < pontosUsuario){
       console.log ("Você ganhou!")
      }
   
}else{
       console.log("O jogo acabou!")
}
/*Refaça o script anterior, mas agora pergunte ao usuário quantos números ele
deseja inserir no array. Depois, o usuário vai preenchendo elemento por
elemento do vetor, ao final, exiba o array e o array ao contrário1*/

 var array = []
 var c = 0
 var numeroArray
 

 numeroArray = parseInt(prompt("quantos números irá ter seu array?"))

  while(c<numeroArray){
     array[c] = parseInt(prompt("Informe um número para o array"))
     c++
 }
 
 for (let index = array.length; index>=0; index--) {
     console.log(array[index])
 }
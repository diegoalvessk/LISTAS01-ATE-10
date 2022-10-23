/*Crie um algoritmo que pergunte 5 números ao usuário, coloque em um array,
depois exiba tal array. Modifique os elementos do array de modo que a
sequência de números fique ao contrário.
Ex.: se digitou 1, 2, 3,4, 5
 tem que ficar 5, 4, 3, 2 , 1*/

var array = []
var c = 0

 while(c<5){
    array[c] = parseInt(prompt("Informe um número para o array"))
    c++
}

for (let index = 4; index>=0; index--) {
    console.log(array[index])
    
}
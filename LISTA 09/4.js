/*
Crie um algoritmo que pede um número inteiro positivo para o usuário. Em
seguida, popule uma array com os números de Fibonacci, na hora de somar com
os termos anteriores, some com elementos anteriores do array. Faça com que o
array tenha no máximo 10 elementos, para iniciar a sequência use o número que
o usuário inseriu -1.
Ex.: inseriu o número 8,
a sequência deve começar da seguinte maneira 7 8 15 23 
*/

var numero = 0
var array = []
var auxiliar = 1
var auxiliar2 = 2
numero = parseInt(prompt("Informe um número inteiro: "))
array [0] =  numero - 1

for (let index = 1; index < 10; index++) {
    if(index == 1){
        array[index] = array[index - auxiliar] + 1
    }else{
        array[index] =  array[index - auxiliar2] + array[index - auxiliar]
    }
}

console.log(array)


/*
Crie um algoritmo que receba um array e um número inteiro positivo. Popule o array
e no final exiba os índices em que número inserido aparece nesse array. Para testes
do exercício use até 10 elementos no array.
*/

var numero
var array = []
var c = 0
var igual = 0
var posicao = 0

numero = parseInt(prompt("Informe um número inteiro positivo."))
while(c<10){
    array[c] = parseInt(prompt("Informe um número para o array"))
    c++
}

for (let index = 0; index < 1; index++) {
    for (let index2 = 0; index2 < 10; index2++) {
        if(array[index2] == numero){
            igual = igual + 1
            posicao = array[index2]
        }
    }
}

alert("O número inserido aparece no array " + igual + " vezes." + " A sua posição no array é: " + posicao)
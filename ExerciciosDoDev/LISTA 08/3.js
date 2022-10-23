var A = []
var B = []
var C = []
var contador = 0
var c = 0
var contadorc = 0


while(contador<10){
    A[contador] = parseInt(prompt("Informe um número"))
    B[contador] = parseInt(prompt("Informe um número"))
    contador++
}

contador = 0
var comparador 
while(contador<10){
    comparador = A[contador]
    while(c<10 && comparador>5){
        if(comparador == B[c] && B[c]>5){
            C[contadorc] = comparador
            contadorc++
        }
        c++
    }
    c = 0
    contador++
}

console.log(A)
console.log(B)
console.log(C)
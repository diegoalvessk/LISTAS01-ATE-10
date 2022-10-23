var numero = []
var par = []
var impar = []
var contadorpar = 0
var contadorimpar = 0

for(var contador = 0; contador<10; contador++){
    numero[contador]= parseInt(prompt("Infome um número"))
    if(numero[contador] % 2 == 0){
        par[contadorpar] = numero[contador]
        contadorpar++
    }else{
        impar[contadorimpar] = numero[contador]
        contadorimpar++
    }
}

console.log(numero)
console.log(par)
console.log(impar)

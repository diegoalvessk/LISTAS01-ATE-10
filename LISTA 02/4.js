var numero1 = 0
var numero2 = 0
var imparPar = 0
var par = 0
var impar = 0

numero1 = parserInt(prompt("Informe o valor do número 1: "))
numero2 = parseInt(prompt("Informe o valor do número 2: "))

if(numero1>numero2){
    for(var c = 0; numero2<numero1; numero2++){
        imparPar = numero2 % 2
            if(imparPar == 0){
                par++
            }else{
                impar++
            }
    }
}else{
    for(var c = 0; numero1<numero2; numero1++){
        imparPar = numero1 % 2
            if(imparPar == 0){
                par++
            }else{
                impar++
            }
    }

}

alert("Existem " + par + " números pares e " + impar + " números impares")


    
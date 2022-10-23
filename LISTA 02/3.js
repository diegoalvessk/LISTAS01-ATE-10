var cont = 0
var numero

for(var contador=0; contador<5; contador++){
    numero = parseInt(prompt("Informe o número desejado:"))
        if(numero>=1 && numero <= 10){
            cont++
        }
}

alert(cont + " número(s) estão/está no intervalo de 1 - 10.")
var numero
numero = parseInt(prompt("Informe um número inteiro e positivo: "))

while(numero<0){
    numero = parseInt(prompt("Por favor, informe um número inteiro e positivo: "))
}

for(var contador = 0; contador<=numero; contador++){
    alert(contador)
}
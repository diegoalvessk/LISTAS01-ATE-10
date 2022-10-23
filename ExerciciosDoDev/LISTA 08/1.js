var idade = []
var altura = []
var media = 0
var soma = 0
var alturamenor = 0

var contador = 0
while(contador<10){
    idade[contador] = parseInt(prompt("Informe a idade do aluno."))
    altura[contador] = parseFloat(prompt("Informe a altura do aluno."))
    soma = soma + altura[contador]
    contador++
}

media = soma / altura.length

var cont = 0

while(cont<10){
    if(idade[cont]>13 && altura[cont]<media){
        alturamenor++
    }
    cont++
}

console.log(media)
console.log("Os aluno com mais de 13 anos que tem uma altura menor do que a média é de: " + alturamenor)
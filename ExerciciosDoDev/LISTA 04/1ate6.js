var nome = ""
var idade = 0
var peso = 0
var altura = 0
var profissao = ""

nome = prompt("Informe o seu nome.")
idade = parseInt(prompt("Informe a sua idade."))
peso = parseInt(prompt("Informe o seu peso."))
altura = parseFloat(prompt("Informe a sua altura."))
profissao = prompt("Informe a sua profissão.")

console.log(nome + ", idade " + idade + ", peso: " + peso + " profissão " + profissao + " altura " + altura)

if(idade<18){
    console.log("Você não pode tomar uma cerveja.")
}else{
    console.log("Você está liberado para tomar umas.")
}

var mes = 0
var semana = 0
var dia = 0
var diasdevida = idade * 365

mes = idade * 12

console.log("Você tem " + mes + " meses de vida")

semana = parseInt(diasdevida / 7)

console.log("Você tem aproximadamente " + semana + " semanas de vida")

console.log("Você tem " + diasdevida + " dias de vida")

var imc = 0

imc = peso / (altura * altura)

if(imc<18.5){
    console.log("Você está em estado de magreza: " + imc + " kg/m2")
}

if(imc>18.5 && imc<24.9){
    console.log("Você está em estado normal: " + imc + " kg/m2")
}

if(imc>=24.9 && imc<30){
    console.log("Você está em estado de sobrepeso: " + imc + " kg/m2")
}

if(imc>30){
    console.log("Você está em estado de obsedidade: " + imc + " kg/m2")
}

var anoIdade = 0
anoIdade = 2022 - idade
idadeContador = anoIdade
console.log(nome +" nasceu no ano de " + anoIdade)

for(anoIdade; anoIdade<=2022; anoIdade++){
    console.log(anoIdade + " - " + (anoIdade - idadeContador) + " anos de idade.")
}
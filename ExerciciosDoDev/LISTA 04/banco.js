var nome = ""
var idade = 0
var salarioAtual = 0
var porcentos = 1.5
var ano = 2023
var simnao = ""
var c = 0
nome = prompt("Informe o seu nome: ")
idade = parseInt(prompt("Informe a sua idade: "))
salarioAtual = parseFloat(prompt("Informe o seu salário: "))

alert("Seu nome é: " + nome + " sua idade é de " + idade + " seu salário é de " + salarioAtual)

simnao = prompt("Você confirma essas informações?")

while(simnao == "nao" && c<4){
    nome = prompt("Informe o seu nome: ")
    idade = parseInt(prompt("Informe a sua idade: "))
    salarioAtual = parseFloat(prompt("Informe o seu salário: "))
    alert("Seu nome é: " + nome + " sua idade é de " + idade + " seu salário é de " + salarioAtual)
    simnao = prompt("Você confirma essas informações?")
    c++
}

if(c ==  4){
    exit()
}

for(var cont = 1; cont<=10 ; cont++){
    salarioAtual = salarioAtual/100
    salarioAtual = salarioAtual * (porcentos + 100)
    console.log(ano + " - " + salarioAtual)
    ano++
    porcentos = porcentos * 2
}   


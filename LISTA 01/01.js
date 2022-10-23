var idade 
var nome 

idade = prompt("Informe a sua idade")
nome = prompt("Informe o seu nome")

var anoNasci = 2022 - idade

console.log(idade)
console.log(nome)
console.log(anoNasci)

var parImparIdade = idade
var parImparAno = anoNasci

if(parImparIdade % 2 == 0){
    parImparIdade = "par"
}else{
    parImparIdade = "impar"
}

if(parImparAno % 2 == 0){
    parImparAno = "par"
}else{
    parImparAno = "impar"
}

alert("Olá, você tem " + idade +" anos que é um número " + parImparIdade + " e nasceu no ano: " + anoNasci + " que é um número " + parImparAno)

if(idade<=18){
    alert("Está liberado o consumo de bebidas para você")
}else{
    alert("Não está liberado o consumo de bebidas para você")
}
var nomes = []
var notas = []

var continuar = "s"
var contador = 0
var soma =  0


while(continuar == "s"){
    nomes[contador] = prompt("Informe o nome do(a) aluno(a): ")
    notas[contador] = parseInt(prompt("Informe a nota do(a) " + nomes[contador] + ":"))
    soma = soma + notas[contador]
    continuar = prompt("Deseja continuar? (n = nao e s = sim)")
    if(continuar == "n"){
        continuar =  "n"
    }
    if(continuar == "s"){
        continuar =  "s"
    }

    contador++

}

for(var cont = 0; cont<nomes.length; cont++){
    console.log("O(A) " + nomes[cont] + " tirou essa nota: " + notas[cont])
}
var media = 0
console.log("A soma de notas da turma é de: " + soma)
var numero = nomes.length
media = soma / numero
console.log("A media de notas da turma é de: " + media)
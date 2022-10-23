var nota = 0
var sexo = " "
var homensNotas = 0
var mulheresNotas = 0
var maiorNotaHomem = 0
var somaNotas = 0

for(var contador = 1; contador<11; contador++){
    nota = 0
    sexo = " "
    nota = parseInt(prompt("Informe a nota do " + contador + " ° aluno."))
    sexo = prompt("Informe o sexo do " + contador +  " ° aluno.")

    somaNotas = somaNotas + nota
    
    if(sexo == "masculino"){
        homensNotas = homensNotas + 1
            if(nota>maiorNotaHomem){
                maiorNotaHomem = nota
            }
    }

    if(sexo == "feminino" && nota > 7){
        mulheresNotas = mulheresNotas + 1
    }
}

var mediaGeral = (somaNotas / 10)

alert("A média geral dos alunos é de: " + mediaGeral)
alert("A quantidade de homens que enviaram as notas foi de: " + homensNotas)
alert("A quantidade de mulheres que tiveram nota acima de 7 foi de: " + mulheresNotas)
alert("A maior nota entre os homens é de: " + maiorNotaHomem)

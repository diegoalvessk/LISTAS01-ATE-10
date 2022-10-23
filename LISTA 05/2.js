var nome
var cpf
var tipo
var saque = 0
var deposito = 0
var valor = 0
var desejacontinuar = 1
var maiorvalor = 0
var media = 0
var medianum = 0

nome = prompt("Informe seu nome")

cpf = prompt("Informe seu cpf")

while(desejacontinuar == 1){

        tipo = prompt("Saque ou deposito? (s = saque e d = deposito)")

        if(tipo == "d"){
            deposito = parseInt(prompt("Quantos reais voce deseja depositar?") )
                while(deposito<1){
                    alert("Informe um valor positivo")
                    deposito = parseInt(prompt("Quantos reais voce deseja depositar?"))
                }
                if(deposito>maiorvalor){
                    maiorvalor = deposito
                }
                valor = valor + deposito
                if(deposito>=1){
                    media++
                }
        }


        if(tipo == "s"){
            saque = parseInt(prompt("Quantos reais voce deseja sacar?"))
                while(saque<1){
                    alert("Informe um valor positivo")
                    saque = parseInt(prompt("Quantos reais voce deseja sacar?"))
                }
                if(valor>saque){
                    valor = valor - saque

                }else{
                    alert("Você não tem dinheiro suficinete, ou deposite ou saque um valor que você possua")
                }
                if(deposito>maiorvalor){
                    maiorvalor = deposito
                }
                
                if(saque>=1){
                    media++
                }
        }

        desejacontinuar = prompt("Deseja continuar? (1 = sim e 2 = parar)")
        
    }

    medianum = valor / media
    prompt("Saldo total é de: " + valor)
    prompt("O maior valor inserido foi de: " + maiorvalor)
    prompt("A média foi de: " + medianum)





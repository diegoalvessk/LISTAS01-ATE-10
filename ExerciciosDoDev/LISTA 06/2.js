var cinto
var bebeu
var semaforo

cinto = prompt("Você está de cinto? (s ou n)")
bebeu = prompt("Você bebeu??(s ou n)")
semaforo = prompt("Semaforo está verde??(s ou n)")

if(cinto == "s" && bebeu == "n" && semaforo == "s"){
    alert("pode prosseguir")
}else{
    alert("não pode prosseguir")
}


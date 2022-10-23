var grana
var notas100 = 0
var notas50 = 0 
var notas10 = 0
var notas5 = 0
var notas1 = 0
grana = prompt("Informe o valor do seu dinheiro!")
var granafinal = grana

while(grana>=100){
    notas100 = notas100 + 1
    grana = grana - 100
}

while(grana>=50){
    notas50 = notas50 + 1
    grana = grana - 50
}

while(grana>=10){
    notas10 = notas10 + 1
    grana = grana - 10
}

while(grana>=5){
    notas5 = notas5 + 1
    grana = grana - 5
}

while(grana>=1){
    notas1 = notas1 + 1
    grana = grana - 1
}

alert(granafinal + " // " + notas100 + " notas de 100, " + notas50 + " notas de 50, "+ notas10 + " notas de 10, " + notas5 + " notas de 5, " + notas1 +  " notas de 1.")
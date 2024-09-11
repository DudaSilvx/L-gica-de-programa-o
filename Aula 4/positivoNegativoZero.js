/* Escreva um código JavaScript usando if...else que verifique se um
número é positivo, negativo ou zero. */

var n = parseFloat(prompt("Digite um número: "))

if (n > 0 ){
    document.write("O número é positivo")
}
else if(n < 0){
    document.write("O número é negativo")
}
else{
    document.write("O número é zero")
}

/* var numero = parseInt(prompt("Digite um número: "))
numero > 0 ? console.log("P!") : numero < 0 ? console.log("N!") : console.log("Z") */
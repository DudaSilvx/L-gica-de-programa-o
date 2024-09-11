/* Faça um script que leia três números inteiros e mostre o maior
deles. */

var n1 = parseInt(prompt("Digite um número: ")) /* parseInt - significa que tudo que esta dentro do prompt em número inteiro */
var n2 = parseInt(prompt("Digite outro número "))
var n3 = parseInt(prompt("Digite outro número "))

if (n1 > n2 && n1 > n3){ /* && - significa AND */
    document.write("O maior é o número ", n1)
}
else if(n2 > n1 && n2 > n3){
    document.write("O maior é o número ", n2)
}
else{
    document.write("O maior é o ", n3)
}

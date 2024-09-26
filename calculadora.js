/* Escreva um programa que simule uma calculadora simples. O programa deve
solicitar dois números e um operador matemático (adição, subtração, 
multiplicação ou divisão). Exiba o resultado da operação. */

let n1 = parseInt(prompt("Digite um número"))
let n2 = parseInt(prompt("Digite outro número"))
let op = prompt("Digite um operador matemático")

soma = n1 + n2
subtracao = n1 - n2
multiplicacao = n1 * n2
divisao = n1 / n2

if(op == "+"){
    document.write(soma)
}else if(op == "-"){
    document.write(subtracao)
}else if(op == "*"){
    document.write(multiplicacao)
}else{
    document.write(divisao)
}
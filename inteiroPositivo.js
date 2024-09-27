/* Elabore um programa que solicite ao usuário um número inteiro positivo
e exiba uma contagem regressiva de 10 até esse número (em decrementos de 1).
Caso o valor digitado seja menor que 10, exiba uma mensagem de erro. */

let numero = parseInt(prompt("Digite um número"))

let regressiva = 10;

if (regressiva > numero){
    console.log(regressiva--)
}
console.log(numero)
/* else(numero > regressiva){
    console.log("Erro")   
} */

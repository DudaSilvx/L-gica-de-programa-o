/* Faça um programa JavaScript que receba 3 números informados pelo usuário 
e em seguida apresente uma mensagem de alerta informando qual é o maior 
número dentre os números informados. */

let n1 = Number(prompt("Digite um número: "))
let n2 = Number(prompt("Digite outro número: "))
let n3 = Number(prompt("Digite outro número: "))

let maiorNumero = Math.max(n1, n2, n3)

alert(`O maior número é o ${maiorNumero}`)
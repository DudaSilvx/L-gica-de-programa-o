/* Faça um script que leia um número e que defina se o número é par
ou ímpar. */

var n = parseInt(prompt("Digite um número: ")) /* parseInt - significa que tudo que esta dentro do prompt em número inteiro */

if (n %2 == 0){ /* % - significa RESTO e == - significa IGUAL */
    document.write("O número é par")
}
else{
    document.write("O número é ímpar")
}

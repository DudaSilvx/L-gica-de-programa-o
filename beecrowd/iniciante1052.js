/* Leia um valor inteiro entre 1 e 12, inclusive. Correspondente a este
 valor, deve ser apresentado como resposta o mês do ano por extenso, em 
 inglês, com a primeira letra maiúscula.

Entrada
A entrada contém um único valor inteiro.

Saída
Imprima por extenso o nome do mês correspondente ao número existente na 
entrada, com a primeira letra em maiúscula. */

num = parseInt(prompt("Digite um número entre 1 e 12: "))

if (num == 1){
    document.write("January")
}else if(num == 2){
    document.write("February")
}else if(num == 3){
    document.write("March")
}else if (num == 4){
    document.write("April")
}else if (num == 5){
    document.write("May")
}else if (num == 6){
    document.write("June")
}else if (num == 7){
    document.write("July")
}else if (num == 8){
    document.write("August")
}else if (num == 9){
    document.write("September")
}else if(num == 10){
    document.write("October")
}else if(num == 11){
    document.write("November")
}else{
    num == 12
    document.write("December")}
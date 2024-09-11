/* Elabore um programa que efetue o cálculo de um aumento salarial
respeitando o seguinte critério: se salário for menor ou igual a
R$500,00, aumento de 15%; se salário for maior que R$500,00 mas
menor ou igual a R$1.000,00, aumento de 12,5%; se salário for
maior que R$1.000,00, aumento de 10%. */

var salario = parseInt(prompt("Digite seu salário"))

aumento15 = salario * 1.15
aumento12 = salario * 1.125
aumento10 = salario * 1.10

if (salario <= 500){
    document.write("O aumento com 15% é ",aumento15)
}
else if(salario > 500 && salario <= 1000){
    document.write("O aumento com 12,5% é ",aumento12)
}
else{
    document.write("O aumento com 10% é ",aumento10)
}
/* Escreva um programa que leia o número de um funcionário, seu 
número de horas trabalhadas, o valor que recebe por hora e calcula 
o salário desse funcionário. A seguir, mostre o número e o salário 
do funcionário, com duas casas decimais.

Entrada
O arquivo de entrada contém 2 números inteiros e 1 número com duas 
casas decimais, representando o número, quantidade de horas trabalhadas 
e o valor que o funcionário recebe por hora trabalhada, respectivamente.

Saída
Imprima o número e o salário do funcionário, conforme exemplo fornecido, 
com um espaço em branco antes e depois da igualdade. No caso do salário, 
também deve haver um espaço em branco após o $. */

num = parseInt(prompt("Digite um salário: "))
horasTrabalhadas = parseInt(prompt("Digite as horas trabalhadas: "))
salarioHora = parseFloat(prompt("Digite o salário por hora: "))

sal = horasTrabalhadas * salarioHora

document.write("NUMBER = ", num + "<br />");
document.write(`SALARY = U$ ${sal.toFixed(2)}`) 
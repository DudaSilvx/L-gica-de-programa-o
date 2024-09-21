/* Neste problema, deve-se ler o código de uma peça 1, o número de peças 1, 
o valor unitário de cada peça 1, o código de uma peça 2, o número de peças 2
 e o valor unitário de cada peça 2. Após, calcule e mostre o valor a ser 
 pago.

Entrada
O arquivo de entrada contém duas linhas de dados. Em cada linha haverá 3 
valores, respectivamente dois inteiros e um valor com 2 casas decimais.

Saída
A saída deverá ser uma mensagem conforme o exemplo fornecido abaixo, 
lembrando de deixar um espaço após os dois pontos e um espaço após o 
"R$". O valor deverá ser apresentado com 2 casas após o ponto. */

valor = prompt("Digite os valores da primeira linha: ").split(' ')
cg = parseInt(valor[0])
qtd1 = parseInt(valor[1])
vl1 = parseFloat(valor[2])

valor = prompt("Digite os valores da segunda linha: ").split(' ')
cg2 = parseInt(valor[0])
qtd2 = parseInt(valor[1])
vl2 = parseFloat(valor[2])

total = qtd1 * vl1 + qtd2 * vl2

document.write(`VALOR A PAGAR: R$ ${total.toFixed(2)}`)
/* Calcule o consumo médio de um automóvel sendo fornecidos a distância 
total percorrida (em Km) e o total de combustível gasto (em litros).

Entrada
O arquivo de entrada contém dois valores: um valor inteiro X representando 
a distância total percorrida (em Km), e um valor real Y representando o total
 de combustível gasto, com um dígito após o ponto decimal.

Saída
Apresente o valor que representa o consumo médio do automóvel com 3 casas 
após a vírgula, seguido da mensagem "km/l". */

distPercorrida = parseInt(prompt("Digite a distância total percorrida (em Km): "))
combGasto = parseFloat(prompt("Digite o total do combustível gasto (com um dígito após o ponto decimal: "))

cMedio = distPercorrida / combGasto

document.write(`${cMedio.toFixed(3)} km/l`)
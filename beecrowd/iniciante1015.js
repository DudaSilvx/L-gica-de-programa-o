/* Leia os quatro valores correspondentes aos eixos x e y de dois pontos 
quaisquer no plano, p1(x1,y1) e p2(x2,y2) e calcule a distância entre eles,
 mostrando 4 casas decimais, segundo a fórmula:

Distancia =

Entrada
O arquivo de entrada contém duas linhas de dados. A primeira linha contém 
dois valores de ponto flutuante: x1 y1 e a segunda linha contém dois valores
 de ponto flutuante x2 y2.

Saída
Calcule e imprima o valor da distância segundo a fórmula fornecida, 
considerando 4 casas decimais. */

valores = prompt("Digite os primeiros valores: ").split(" ")
X1 = parseFloat(valores[0])
Y1 = parseFloat(valores[1])

valores = prompt("Digite os segundos valores: ").split(" ")
X2 = parseFloat(valores[0])
Y2 = parseFloat(valores[1])

dist = ((X2 - X1) ** 2 + (Y2 - Y1) ** 2) ** 0.5

document.write(dist.toFixed(4))
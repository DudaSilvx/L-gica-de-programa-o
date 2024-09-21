/* Escreva um programa que leia três valores com ponto flutuante de dupla 
precisão: A, B e C. Em seguida, calcule e mostre:
a) a área do triângulo retângulo que tem A por base e C por altura.
b) a área do círculo de raio C. (pi = 3.14159)
c) a área do trapézio que tem A e B por bases e C por altura.
d) a área do quadrado que tem lado B.
e) a área do retângulo que tem lados A e B.
Entrada
O arquivo de entrada contém três valores com um dígito após o ponto decimal.

Saída
O arquivo de saída deverá conter 5 linhas de dados. Cada linha corresponde a 
uma das áreas descritas acima, sempre com mensagem correspondente e um espaço
 entre os dois pontos e o valor. O valor calculado deve ser apresentado com 3
  dígitos após o ponto decimal. */

valores = prompt("Digite os valores: ").split(" ")
A = parseFloat(valores[0])
B = parseFloat(valores[1])
C = parseFloat(valores[2])

areaTriangulo = (A * C) / 2
areaCirculo = 3.14159 * (C ** 2)
areaTrapezio = ((A + B) * C) / 2
areaQuadrado = B ** 2
areaRetangulo = A * B

document.write(`TRIANGULO: ${areaTriangulo.toFixed(3)}` + "<br />") 
document.write(`CIRCULO: ${areaCirculo.toFixed(3)}` + "<br />")
document.write(`TRAPEZIO: ${areaTrapezio.toFixed(3)}` + "<br />") 
document.write(`QUADRADO: ${areaQuadrado.toFixed(3)}` + "<br />") 
document.write(`RETANGULO: ${areaRetangulo.toFixed(3)}`)
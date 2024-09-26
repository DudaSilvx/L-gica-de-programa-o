/* Crie um programa que solicite ao usuário 3 notas (valores numéricos)
e calcule a média aritmética dessas notas. Se a média for maior ou igual a 7,
exiba a mensagem "Aprovado"; caso contrário, exiba "Reprovado". */

let n1 = parseFloat(prompt("Digite a primeira nota"))
let n2 = parseFloat(prompt("Digite a segunda nota"))
let n3 = parseFloat(prompt("Digite a segunda nota"))

media = (n1 + n2 + n3)/3

if(media >= 70){
    document.write("Aprovado")
}else{
    document.write("Reprovado")
}
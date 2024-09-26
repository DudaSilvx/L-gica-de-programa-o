/* Elabore um programa em Javascript que leia a velocidade permitida 
em uma estrada e a velocidade de um condutor. Se a velocidade for inferior
ou igual à permitida, exiba “Sem Multa”. Se a velocidade for de até 20% 
maior que a permitida, exiba “Multa Leve”. E, se a velocidade for superior
a 20% da velocidade permitida, exiba “Multa Grave”. */

let vEstrada = parseInt(prompt("Digite a velocidade permitida em uma estrada" ))
let vCondutor = parseInt(prompt("Digite a velocidade de um condutor"))

conta1 = vEstrada * 1.20

if(vCondutor <= vEstrada){
    document.write("Sem Multa")
}else if(vCondutor === conta1){
    document.write("Multa Leve")
}else{
    document.write("Multa Grave")
}

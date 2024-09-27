/* [Questão extra] Crie um programa em JavaScript que solicite ao usuário
10 títulos de notícias de sua cidade e armazene-os em um array. Após 
inserir todos os títulos, exiba-os na tela na ordem inversa (do mais
recente para o mais antigo) */

let titulo1 = prompt("Digite o primeiro titulo: ");
let titulo2 = prompt("Digite o segundo titulo: ");
let titulo3 = prompt("Digite o terceiro titulo: ");
let titulo4 = prompt("Digite o quarto titulo: ");
let titulo5 = prompt("Digite o quinto titulo: ");
let titulo6 = prompt("Digite o sexto titulo: ");
let titulo7 = prompt("Digite o setimo titulo: ");
let titulo8 = prompt("Digite o oitavo titulo: ");
let titulo9 = prompt("Digite o nono titulo: ");
let titulo10 = prompt("Digite o decimo titulo: ");


lista = [titulo1,titulo2, 
        titulo3, titulo4, 
        titulo5, titulo6, 
        titulo7, titulo8, 
        titulo9, titulo10];

lista.reverse();

console.log(`do mais recente para o mais antigo: ${lista}`);
/*O usuário deve digitar as 4 notas (de 0 a 10) bimestrais e o
programa deve calcular a média. Após isso, o programa deve
verificar se a média é maior ou igual a 6.

Caso afirmativo, exibe na tela uma mensagem informando que o
aluno foi aprovado, caso contrário, uma mensagem informando que
ele foi reprovado.*/

n1 = parseInt(prompt("Digite a primeira nota (de 0 a 10)"));
n2 = parseInt(prompt("Digite a segunda nota (de 0 a 10)"));
n3 = parseInt(prompt("Digite a terceira nota (de 0 a 10)"));
n4 = parseInt(prompt("Digite a quarta nota (de 0 a 10)"));

media = (n1 + n2 + n3 + n4) / 4

if (media >= 6) {
    console.log("O aluno foi aprovado!!")}
else{
    console.log("O aluno foi reprovado!!")
}



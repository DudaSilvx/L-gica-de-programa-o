/*  Vamos simular um caixa eletrônico quando vamos sacar dinheiro. O
caixa eletrônico verifica-se o valor que desejamos sacar é menor
que o saldo disponível. Assumiremos que há R$ 1000 de saldo
disponível para o saque. Se o valor que o usuário quer sacar é
menor ou igual ao saldo disponível, então o algoritmo permite o
saque, caso contrário, não. */

saldoDisponivel = 1000;
valorSaque = prompt("Digite um valor para sacar: ")


if (valorSaque <= saldoDisponivel) {
    saldoDisponivel =  saldoDisponivel - valorSaque
    document.write(valorSaque)
}

else {
    document.write("O valor é maior que o saldo.")
}

document.write("Saldo disponível na conta é: ", saldoDisponivel)
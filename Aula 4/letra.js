/* Faça um script que verifique se uma letra digitada num campo de
input é vogal ou consoante. */

var letra = prompt("Digite uma letra:")

if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u'){ /* || - significa OR e == significa IGUAL */
    document.write("A letra é uma vogal")
}
    else{
    document.write("A letra é uma consoante")
}
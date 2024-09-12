/* Crie uma variável chamada “fruta”. Esta variável deve receber uma
string com o nome de uma fruta. Após, crie uma estrutura
condicional switch que receba esta variável e que possua três casos:
caso maçã, retorne no console: “Não vendemos esta fruta aqui”.
Caso kiwi, retorne: “Estamos com escassez de kiwis” e caso
melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas
três opções e verifique o console do seu navegador. Crie também
um default, que retornará uma mensagem de erro no console. */

fruta = "melancia";
    switch (fruta) {

        case "maçã":
            msg = "Não vendemos esta fruta aqui.";
            break;

        case "kiwi":
            msg = "Estamos com escassez de kiwis.";
            break;

        case "melancia":
            msg = "Aqui está, são 3 reais o quilo.";
            break;

        default:
            msg = "Erro"
        }
    document.write(msg)
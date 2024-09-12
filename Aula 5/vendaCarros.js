/* Um homem decidiu ir à uma revenda comprar um carro. Ele deseja
comprar um carro hatch, e a revenda possui, além de carros hatch,
sedans, motocicletas e caminhonetes. Utilizando uma estrutura
switch/case, caso o comprador queira o hatch, retorne: “Compra
efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
que não prefere este modelo?”. Caso seja especificado um modelo
que não está disponível, retorne no console: “Não trabalhamos com
este tipo de automóvel aqui”. */

carro = "uno"

switch (carro){
    case "hatch":
        msg = "Compra efetuada com sucesso.";
        break;
    case "sedans":
        msg = "Tem certeza que não prefere este modelo?"
        break;
    case "motocicletas":
        msg = "Tem certeza que não prefere este modelo?"
        break;
    case "caminhonetes":
        msg = "Tem certeza que não prefere este modelo?"
        break;
    default:
        msg = "Não trabalhamos com este tipo de automóvel aqui!!"
}
document.write(msg)
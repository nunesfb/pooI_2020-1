//01

const produto = {
    nome: "Cimento Cola",
    valorUnitario: 56.89,
    caracteristicas: {
        tipo: "Construção",
        peso: 8.67,
        cor: "Azul"
    }
};

//A

const { caracteristicas: { tipo, peso, cor }, ...dados } = produto;

console.log(tipo, peso, cor, dados);

//B

function calculaTotal(quantidade) {
    var valorTotal = 0;
    if (quantidade <= 5) {
        valorTotal = produto.valorUnitario * 0.95 * quantidade;
        return `Nome: ${produto.nome} || Valor Unitário: ${produto.valorUnitario} || Quantidade: ${quantidade} || Valor Total: ${valorTotal}`;
    } else if (quantidade <= 10) {
        valorTotal = produto.valorUnitario * 0.90 * quantidade;
        return `Nome: ${produto.nome} || Valor Unitário: ${produto.valorUnitario} || Quantidade: ${quantidade} || Valor Total: ${valorTotal}`;
    } else if (quantidade <= 15) {
        valorTotal = produto.valorUnitario * 0.80 * quantidade;
        return `Nome: ${produto.nome} || Valor Unitário: ${produto.valorUnitario} || Quantidade: ${quantidade} || Valor Total: ${valorTotal}`;
    }
}
produto.nome = "Tinta";
produto.valorUnitario = 45;
console.log(calculaTotal(2));

produto.nome = "Parafuso";
produto.valorUnitario = 0.67;
console.log(calculaTotal(7));

produto.nome = "Tomada";
produto.valorUnitario = 2;
console.log(calculaTotal(11));



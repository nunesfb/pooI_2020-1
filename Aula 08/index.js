class Lista {
    constructor(){
        this.array = [];
    }

    adicionarElemento(){
        this.array.push("Elemento");
    }
}

const lista = new Lista();
console.log(lista.array);
lista.adicionarElemento();
console.log(lista.array);


//ATIVIDADE
class Caixa{
    constructor(codigo, saldo){
        this.codigo = codigo;
        this.saldo = saldo;
    }

    setCodigo(codigo){
        this.codigo = codigo;
    };

    getCodigo(){
        return this.codigo;
    };

    setSaldo(saldo){
        this.saldo = saldo;
    };

    getSaldo(){
        return this.saldo;
    };

    depositar(valor){
        this.saldo += valor;
        return `Depositou: R$ ${valor}`;
    };
    mostrarSaldo(){
        return `Saldo: ${this.saldo}`;
    };
}
const caixa = new Caixa(1, 100);
console.log(caixa.mostrarSaldo());
caixa.setSaldo(400);
console.log(caixa.getSaldo());
console.log(caixa.depositar(300));
console.log(caixa.mostrarSaldo());


class Retangulo{
    constructor(altura, largura){
        this.altura = altura;
        this.largura = largura;
    };
    getAltura(){
        return this.altura;
    };
    setAltura(altura){
        this.altura = altura;
    };
    getLargura(){
        return this.largura;
    };
    setLargura(largura){
        this.largura = largura;
    };
    calculaArea(){
        return this.altura * this.largura;
    };
}

const retangulo = new Retangulo(10, 10);
console.log(retangulo.calculaArea());
retangulo.setAltura(20);
retangulo.setLargura(20);
console.log(retangulo.calculaArea());
console.log(retangulo.getLargura());
console.log(retangulo.getAltura());
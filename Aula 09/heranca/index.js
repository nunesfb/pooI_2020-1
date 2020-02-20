class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getNome() {
        return this.nome;
    }
    setIdade(idade) {
        this.idade = idade;
    }
    getIdade() {
        return this.idade;
    }
    imprimir() {
        return `Nome: ${this.nome} || Idade: ${this.idade}`;
    }
}
const pessoa = new Pessoa("Maria", 25);
console.log(pessoa.imprimir());

class Funcionario extends Pessoa {
    constructor(nome, idade, salarioBruto) {
        super(nome, idade);
        this._salarioBruto = salarioBruto;
    }
    setSalarioBruto(salarioBruto){
        this._salarioBruto = salarioBruto;
    }
    getSalarioBruto(){
        return this._salarioBruto;
    }
    calculaSalarioLiquido(){
        const salarioLiquido = this
        ._salarioBruto - (this._salarioBruto * 0.13);
        return `${this.nome} possui um salário de ${salarioLiquido}`;
    }
}
const funcionario = new Funcionario("Teste", 23, 1400);
console.log(funcionario.idade);

funcionario.setIdade(30);
console.log(funcionario.getIdade());

funcionario.setNome("Maria");
funcionario.setIdade(24);
funcionario.setSalarioBruto(2500);

console.log(funcionario.getNome());
console.log(funcionario.getSalarioBruto());
console.log(funcionario.imprimir());
console.log(funcionario.calculaSalarioLiquido());


class Diretor extends Pessoa {
    constructor(nome, permissao){
        super(nome);
        this.permissao = permissao;
    }
    setPermissao(permissao){
        this.permissao = permissao;
    }
    getPermissao(){
        return this.permissao;
    }
    nivelPermissao(){
        return `${this.nome} tem o nivel de permissão: ${this.permissao}`;
    }
}
const diretor = new Diretor("João", "Parcial");
console.log(diretor.getNome()); //joao
console.log(diretor.nivelPermissao()); //parcial

diretor.setNome("Maria");
diretor.setPermissao("Total");
console.log(diretor.getNome()); //maria
console.log(diretor.nivelPermissao()); //total
diretor.setIdade(27);
console.log(diretor.imprimir());

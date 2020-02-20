class Pessoa{
    constructor(nome, peso, altura){
        this._nome = nome;
        this._peso = peso;
        this._altura = altura;
    };

    setNome (nome){
        this._nome = nome;
    }
    getNome(){
        return this._nome;
    }
    setPeso (peso){
        this._peso = peso;
    }
    getPeso(){
        return this._peso;
    }

    setAltura (altura){
        this._altura = altura;
    }
    getAltura(){
        return this._altura;
    }
    calculaIMC(){
        const resultado = this._peso / (this._altura * this._altura);
        return `${this._nome} possui um IMC de ${resultado}`;
    }
};

const pessoa = new Pessoa("Maria", 90, 1.99);
console.log(pessoa.calculaIMC());


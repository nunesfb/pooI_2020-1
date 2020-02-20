/*class Animal {
    constructor(nome){
        this._nome = nome;
    }
    getNome(){
        return this._nome;
    }
    setNome(nome){
        this._nome = nome;
    }
}
const animal = new Animal('catioro');
console.log(animal.getNome());
animal.setNome('peixe');
console.log(animal.getNome());*/

class Animal {
    constructor(nome){
        this._nome = nome;
    }
    get nome(){
        return this._nome;
    }
    set nome(nome){
        this._nome = nome;
    }
}
const animal = new Animal('catioro');
console.log(animal.nome);
animal.nome = 'peixe';
console.log(animal.nome);




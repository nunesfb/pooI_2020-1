class Animal {
    constructor(nome){
        this.nome = nome;
    }
    setNome(nome){
        this.nome = nome;
    }
    getNome(){
        return this.nome;
    }
    mover(distancia){
        console.log(`${this.nome} se moveu ${distancia} metros`);
    }
}
const animal = new Animal("Cabrito");
animal.mover(50);

class Snake extends Animal{
    constructor(nome){
        super(nome);
    }
    mover(distancia){
        console.log(`${this.nome} se moveu rastejando ${distancia} metros`);
    }
}
const snake = new Snake("Jara");
snake.mover(40);

class Horse extends Animal{
    constructor(nome){
        super(nome);
    }
    mover(distancia){
        console.log(`${this.nome} se moveu galopando ${distancia} metros`);
    }
}
const horse = new Horse("Fausto");
horse.mover(100);
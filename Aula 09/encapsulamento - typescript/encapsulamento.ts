class Animal {
    private teste:string = "Teste";
    nome: string;

    constructor(nome:string){
        this.nome = nome;
    }

    mover(distancia: number = 0){
        console.log(this.teste);
        console.log(`${this.nome} se moveu ${distancia} metros!`);
    }
};

const animal = new Animal("Cachorro");
animal.mover(50);

animal.nome = "Gato";
animal.mover(20);
//animal.teste;
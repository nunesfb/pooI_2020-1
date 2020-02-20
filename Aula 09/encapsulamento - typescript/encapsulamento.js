var Animal = /** @class */ (function () {
    function Animal(nome) {
        this.teste = "Teste";
        this.nome = nome;
    }
    Animal.prototype.mover = function (distancia) {
        if (distancia === void 0) { distancia = 0; }
        console.log(this.teste);
        console.log(this.nome + " se moveu " + distancia + " metros!");
    };
    return Animal;
}());
;
var animal = new Animal("Cachorro");
animal.mover(50);
animal.nome = "Gato";
animal.mover(20);
animal.teste = "Outro valor";

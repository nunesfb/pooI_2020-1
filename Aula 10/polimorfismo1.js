class Veiculo {
    constructor(marca, modelo, cor){
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
    }
    getMarca(){
        return this.marca;
    }
    setMarca(marca){
        this.marca = marca;
    }
    getModelo(){
        return this.modelo;
    }
    setModelo(modelo){
        this.modelo = this.modelo;
    }
    getCor(){
        return this.cor;
    }
    setCor(cor){
        this.cor = cor;
    }
    checkIn(){
        return `
        Marca: ${this.marca} || 
        Modelo: ${this.modelo} || 
        Cor: ${this.cor}`;
    }
}

const veiculo = new Veiculo("Honda", "Civic", "Preto");
console.log(veiculo.checkIn());
/*veiculo.setMarca("Mitsubishi");
veiculo.setModelo("Lancer Evo XL");
veiculo.setCor("Grafite");
console.log(veiculo.checkIn(veiculo.getMarca(), 
veiculo.getModelo(), veiculo.getCor()));*/

class Carro extends Veiculo{
    constructor(marca, modelo, cor, tipoCarro){
        super(marca, modelo, cor);
        this.tipoCarro = tipoCarro;
    }
    getTipoCarro(){
        return this.tipoCarro;
    }
    setTipoCarro(tipoCarro){
        this.tipoCarro = tipoCarro;
    }
    checkIn(){
        return super.checkIn() + `
        Tipo do carro é ${this.tipoCarro}`;
    }

    estacionar(){
        return `O carro de marca ${this.marca} 
        e modelo ${this.modelo}
        e cor ${this.cor} foi estacionado 
        e o tipo do carro é ${this.tipoCarro}`;
    }
}
const carro = new Carro("Fiat", "Bravo Sporting", "Vermelho", "Hatch");
//console.log(carro.estacionar());

console.log(carro.checkIn());

class Motocicleta extends Veiculo{
    constructor(marca, modelo, cor, capacete){
        super(marca, modelo, cor);
        this.capacete = capacete;
    }
    getCapacete(){
        return this.capacete;
    }
    setCapacete(capacete){
        this.capacete = capacete;
    }
    empinar(){
        return `A moto de marca ${this.marca} 
        e modelo ${this.modelo}
        e cor ${this.cor} saiu freneticamente empinando em 1 roda 
        e o capacete estava ${this.capacete}`;
    }
    
    checkIn(){
        return super.checkIn() + `
        O capacete está ${this.capacete}`;
    }
}

const motocicleta = new Motocicleta("Honda", "XRE350", "Preto", "Presente");
console.log(motocicleta.checkIn());
//console.log(motocicleta.empinar());
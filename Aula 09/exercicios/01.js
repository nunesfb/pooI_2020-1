//01

const pessoa = {
    nome: "João",
    idade: 29,
    caracteristicas: {
        peso: 82.5,
        altura: 1.87
    }
};

//A

const {caracteristicas: {peso, altura}, ...others} = pessoa;

console.log(peso, altura, others);

//B

function calculaIMC (...pessoa){
    return pessoa.reduce((peso, altura) => peso / (altura * altura));
} 
console.log(calculaIMC(peso, altura));

//C

const data = {...pessoa.caracteristicas, peso: 70, altura: 1.56};
console.log(calculaIMC(data.peso, data.altura));



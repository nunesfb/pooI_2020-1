//ABSTRAÇÃO
//Estou abstraindo pessoa, pegando somente 
//os dados necessarios ao meu sistema
function Pessoa (nome, idade) {;
    this.nome = 'Felipe';
    this.idade = 29;
}

//CLASSES E OBJETOS
//Sintaxe básica
class Teste {
    metodo(){
        //faz algo
    }    
    
    outroMetodo(){
        //faz algo tbm
    }
}

//para criar uma classe, uso a palavra class e dou um nome a esta classe
//o nome de preferencia com a inicial maiuscula
class Ventilador {
    //aqui estou criando um metodo dentro da classe e estou passando 2 paramentros nele
    //os paramentros sao velMax e ligado, os mesmos abaixo na direita
    //na esquerda estou criando os atributos da classe, com o mesmo nome (podem ser diferentes)
    //para criar o atributo, uso a palavra this antes dele
    funcoesVentilador(velMax, ligado){
        this.velMax = velMax;
        this.ligado = ligado;
        return `Velocidade atual: ${this.velMax} 
        || Ligado: ${this.ligado}`;
    }
}
//aqui esta sendo feita a instanciacao (new) da classe e criacao do objeto ventilador
//após isso irei usar somente o somente, esqueço da classe
//o objeto me permite acessar os metodos e atributos da classe que sao publicos
const ventilador = new Ventilador();
console.log(ventilador.funcoesVentilador(2, true));

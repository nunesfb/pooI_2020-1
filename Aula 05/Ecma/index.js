/*/////////////////////////////////////////////////////////////////////////////////////
//CONSTANTES E MUTAÇÃO
//nao posso alterar o valor da constante desta forma
const a = 1;
console.log(a);
isso aqui nao é permitido
a = 2;
console.log(a);

//estou criando um objeto, com uma propriedade nome e valor Felipe
const usuario = { nome: 'Felipe'};
console.log(usuario.nome);
//mutação
usuario.nome = 'Becker';
console.log(usuario.nome);
/////////////////////////////////////////////////////////////////////////////////////*/

/*/////////////////////////////////////////////////////////////////////////////////////
//var e let - escopo com de elementos
//x está em um escopo global
var x = 1;

function Imprime(){
    //y está em um escopo local (reconhecido somente na funcao)
    var y = 3;
    console.log(x, y);
}
console.log(x, y);
Imprime();

let x = 1;

if(x === 1){
    let x = 2;
    console.log(x);
}
console.log(x);
/////////////////////////////////////////////////////////////////////////////////////*/


/*/////////////////////////////////////////////////////////////////////////////////////
// ARROW FUNCTION
const teste = function(x){
    return x;
}
console.log(teste("Imprimiu!"));


//remover a keyword function
// colocar o sinal => (arrow function)
// adiciono o sinal entre os parenteses e a chave
const teste2 = (x) => {
    return x;
}
console.log(teste2("Imprimiu!"));

//quando uma funcao tem um parametro eu posso remover os parenteses dela
const teste3 = x => {
    return x;
}
console.log(teste3("Imprimiu!"));

//quando tem somente uma linha na funcao de execucao
//eu posso remover o return e as chaves
const teste4 = x => x;
console.log(teste4("Imprimiu!"));

//exemplo com 2 parametros
const soma = function (a, b) {
    return a + b;
}
console.log(soma(1,2));

const soma2 = (a, b) => a + b;
console.log(soma2(1,2));

const imprime = function (){
    return "Teste";
}
console.log(imprime());

const imprime2 = () => "Teste";
console.log(imprime2());

const resultado = function Soma (x, y) {
     return x + y;
}
console.log(resultado(1,2));

const soma = (x, y) => x + y;
console.log(soma(1,2 )); 

const soma =  () => ({ nome: "Felipe" });

/////////////////////////////////////////////////////////////////////////////////////*/





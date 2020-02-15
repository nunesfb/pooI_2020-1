//ARRAYS E MÉTODOS
/*/////////////////////////////////////////////////////////////////////////////////////
//MAP - CRIA UM NOVO ARRAY APÓS PERCORRER TODOS ITENS E REALIZAR ALGUMA OPERAÇÃO
const array1 = [1, 3, 6, 8];
// funcao normal (anonima)
const array2 = array1.map(function(item, index){
    return item * 2;
})
console.log(array2);
// arrow function
//const array2 = array1.map((item, index) => item * 2);
/////////////////////////////////////////////////////////////////////////////////////*/


/*/////////////////////////////////////////////////////////////////////////////////////
REDUCE - REALIZA UMA OPERAÇÃO NO ARRAY E GERA UM RESULTADO
const array3 = array1.reduce(function(total, next){
    return total + next;
})
console.log(array3);
//const array3 = array1.reduce((total, next) => total + next);
/////////////////////////////////////////////////////////////////////////////////////*/

/*/////////////////////////////////////////////////////////////////////////////////////
FILTER - BUSCAR ITENS NO ARRAY QUE SATISFAÇAM A CONDIÇÃO E GERA UM NOVO ARRAY
const filter = array1.filter(function(item){
    return item % 2 === 0 || item === 3;
})
console.log(filter);

//const filter = array1.filter(item => item % 2 === 0);
/////////////////////////////////////////////////////////////////////////////////////*/

/*/////////////////////////////////////////////////////////////////////////////////////
FIND - ACHA UM ELEMENTO NO ARRAY E RETORNA ELE OU UNDEFINED
const find = array1.find(function(item){
    return item === 3;
})
console.log(find);

//const find = array1.find(item => item === 3);
array1.forEach(element => console.log(element));
/////////////////////////////////////////////////////////////////////////////////////*/





/*/////////////////////////////////////////////////////////////////////////////////////
//DESESTRUTURAÇÃO
const usuario = {
    nome: 'Felipe', 
    idade: 29,
    endereco: {
        cidade: 'Santa Maria',
        estado: 'RS'
    }
};

const nome = usuario.nome;
const idade = usuario.idade;
const cidade = usuario.endereco.cidade;
const estado = usuario.endereco.estado;

const { nome, peso, endereco: {cidade} } = usuario;
console.log(nome);
//console.log(idade);
console.log(cidade);
//console.log(estado);
console.log(peso);


function mostraNome (usuario){
    console.log(usuario.nome);
}
mostraNome(usuario);


function mostraNome ({nome, idade}){
    console.log(nome);
    console.log(idade);
}
mostraNome(usuario);
/////////////////////////////////////////////////////////////////////////////////////*/


/*/////////////////////////////////////////////////////////////////////////////////////
// OBJECT SHORT SINTAX
const nome = 'Felipe';
const idade = 29;

const user = {
    //nome: nome,
    //idade: idade,
    nome,
    idade,
    empresa: "AMF"
}
console.log(user);
/////////////////////////////////////////////////////////////////////////////////////*/


/*/////////////////////////////////////////////////////////////////////////////////////
// TEMPLATE LITERALS
console.log("Nome: " + nome + " || Idade: " + idade);
console.log(`Nome: ${nome} || Idade: ${idade}`);
/////////////////////////////////////////////////////////////////////////////////////*/


/*/////////////////////////////////////////////////////////////////////////////////////
//REST
const user = {
    nome: 'Felipe',
    idade: 28,
    empresa: 'Amf'
};

const { nome, ...resto } = user;
console.log(nome);
console.log(resto);

function soma (a, b, c){
    return a + b + c;
}
console.log(soma(2, 4, 4));

function soma2(...params){
    return params.reduce((total, next) => total + next);
}
console.log(soma2(1, 2, 4, 10));

const array1 = [1, 2, 3];
const array2 = [5, 6, 7];

const array3 = [...array1, ...array2];
console.log(array3);
/////////////////////////////////////////////////////////////////////////////////////*/


/*/////////////////////////////////////////////////////////////////////////////////////
// SPREAD
const userSistema = {
    nome: 'Felipe',
    idade: 29,
    empresa: 'AMF'
};
const resultado = { ...userSistema, 
    nome: 'Becker', profissao: 'Professor'};
console.log(resultado);
/////////////////////////////////////////////////////////////////////////////////////*/


/*/////////////////////////////////////////////////////////////////////////////////////
// EXPORTAR E IMPORTAR
//const Operacoes = require('./src/operacoes/funcoes.js');
const { Soma } = require('./src/operacoes/funcoes.js');
//console.log(Operacoes.soma(1, 2));
console.log(Soma(1,2));
/////////////////////////////////////////////////////////////////////////////////////*/

/*/////////////////////////////////////////////////////////////////////////////////////
ASYNC E AWAIT
function TimeResolve () {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(console.log('resolved'));
        }, 2000);
    })
}
//TimeResolve();

async function AsyncFunction(){
    console.log('calling');
    const result = await TimeResolve();
    //console.log(result);
}
AsyncFunction();
/////////////////////////////////////////////////////////////////////////////////////*/

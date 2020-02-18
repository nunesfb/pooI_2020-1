//5.1
/*
const arr = [1, 2, 3, 4, 5, 6];

const [x, ...y] = arr;
/*
console.log(x);
console.log(y);

function soma (...params){
    return params.reduce((a, b) => a + b);
}

console.log(soma(1, 2, 3, 4, 5 , 6));
console.log(soma(1, 2));
*/

//5.2

const user = { 
    name: 'Felipe', 
    age: 28,
    adress: {
        city: 'Restinga',
        country: 'Brazil'
    }
};

const user2 = {...user, name: "Becker"};
const user3 = {...user.adress, city: "Santa Maria"};
const user3 = {...user, adress:{ ...user.adress, city: "Santa Maria"}};
console.log(user2);
console.log(user3);
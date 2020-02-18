//4.1
/*
const company = {
    name: 'AMF',
    adress: {
        city: 'Restinga Seca',
        state: 'RS'
    }
};

const {name, adress: {city, state}}  = company;

console.log(name);
console.log(city);
console.log(state);
*/
//4.2

function showInfo({name, age}){
    return `${name} has ${age} years`;
}
console.log(showInfo({name: 'Felipe', age: 28}));
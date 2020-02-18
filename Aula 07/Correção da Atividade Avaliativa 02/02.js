//2.1

const users = [
    {name: "Felipe", age: 28, company: "AMF"},
    {name: "Becker", age: 18, company: "AMF"},
    {name: "Nunes", age: 38, company: "Other"}
];
/*
const ages = users.map(users => users.age);
console.log(ages);
*/

//2.2
/*
const usersFilter = users.filter(users =>  
    users.company === "AMF" && users.age >= 15
);
console.log(usersFilter);
*/

//2.3
/*
const other = users.find(users => 
 users.company === "Other"
)
console.log(other);
*/

//2.4
/*
const calcAge = users
    .map(user => ({...user, age: user.age *2}))
    .filter(user => user.age <= 50);
console.log(calcAge);
*/
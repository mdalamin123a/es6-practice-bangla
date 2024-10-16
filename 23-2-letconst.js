const name = "Md. Rakibul Khan";
// name = "Md. Rakib";
// console.log(name)

const numbers = [12, 45];
numbers[1] = 88;
numbers.push(12);
// numbers = ["Sunny", "Salman", "Omit Hasan"];
// console.log(numbers);

// const nayok = {name:"sakib khan", phone:4578};
// console.log(nayok)

let patientName = "Rahim Chacha";
patientName = "Rubi";
// console.log(patientName);

let sum = 0;

// var is a global var. we can access it outsite of scope
// for(var i = 0; i < 10; i++){
//     sum = sum + i;
// }
// console.log(i);

// let is a scope var. we can't access it outsite of scope
for(let i = 0; i < 10; i++){
    sum = sum + i;
}
console.log(i)
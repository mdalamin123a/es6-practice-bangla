/**
 * making normal function
 */

// function doubleIt(num){
//     return num * 2;
// }

/**
 * making function expression
 */

// const doubleIt = function myFun(num){
//     return num * 2;
// }

/**
 * making arrow function multiple param
 */
const add = (x, y) => x + y;

/**
 * making arrow function empty param
 */

const give5 = () => 5;

// making multiline in arrow function block by using {}
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result; 
}

// const result = doubleIt(5);
const result = add(5, 4);
const result2 = give5();
const result3 = doMath(7, 5);
console.log(result3);
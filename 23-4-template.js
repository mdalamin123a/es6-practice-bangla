const firstName = "Justin";
const lastName = "TimberLake";
const fullName = firstName + " " + lastName + " is a good boy";
/**
 * we can user variable in template using ${} and under this we can write any 
 * valid js expression
 */
// const fullName2 = `${firstName} ${lastName} is a good body`;
const fullName2 = `${firstName} ${20+50+30} is a good body`;

/**
 * \n is used to make new line
 */
const multiLine = "I love you\n"
+"I miss you\n"
+"I need you";

const multiLine2 = `I love you
I miss you
no. I don't need you 
Baily road e dorkar nai.`;

console.log(multiLine2)
const ages = [12, 14, 16, 13, 17];
const ages2 = [15, 16, 12];
const ages3 = [25, 36, 22, 29];

/**
 * concat() is used to merge / add to array
 */

const allAges = ages.concat(ages2).concat([5]).concat(ages3);

/**
 * Three dot (...) is used to make spread operator. It is used to spread an array
 * item. is is used to make new array form a array
 */
const allAges2 = [...ages, ...ages2, 5,...ages3];

// console.log(allAges2);

const business = 650;
const minister = 450;
const sochib = 250;
const takaPoisa = [650, 450, 250];
// const maximum = Math.max(business, minister, sochib);
const maximum = Math.max(...takaPoisa);
console.log(maximum);
const number = [10, 20, 30, 40];
const [first, second, ...rest] = number;

console.log(`First = ${first}, Second = ${second}, Rest = [${rest}]`)
'use strict'

const createAdder = (number = 0) => (num = 0) => number += num;  

const counter = createAdder(2);
const counter2 = createAdder(8);

console.log(counter(9));
console.log(counter2(100));
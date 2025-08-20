// let income = require("./module");

// console.log(income)
// console.log(income.sum(5,4));

// const info = require("./ExportInDirectory");
// console.log(info[2]);
// console.log(info[2].Name);
// console.log(info[1].Name)

// 🔹 ./ vs ../ in imports

// Ye path system hai jo batata hai file kahaan se import karni hai:

// ./module.js → same folder me hai jahan se tum import kar rahe ho.

// ../module.js → ek folder upar jao, wahan se module.js lo.
// kesi folder k ander sa file lei ho

import { mul, sum, val } from "./import_concepts/import.js";

console.log(mul(5, 7));
console.log(sum(7, 8));
console.log(val);

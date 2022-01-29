//№5
let numA = prompt(`Введите число А`);
let numB = prompt(`Введите число B`);
let a = Number(numA);
let b = Number(numB);

let sum = a+b;
let minus = a-b;
let multi = a*b;
let divide = a%b;
let remainder = a%b;
let raising = a**b; 

document.write(`Введенные цифры A равен ${a}<br>B равен ${b}<br>`);

document.write(`${sum} сумма a и b; <br>`);
document.write(`${minus} разница между a и b; <br>`);
document.write(`${multi} произведение a и b; <br>`);
document.write(`${divide.toFixed(2)} частное от делениz a и b; <br>`);
document.write(`${remainder} остаток от деления a на b; <br>`);
document.write(`${raising} результат возведения числа a в и b; <br>`);
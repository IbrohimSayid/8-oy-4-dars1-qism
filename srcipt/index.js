"use strict";
// 1
function calculateTotal(products) {
    return products.reduce((total, product) => total + product.price, 0);
}
const products = [
    { name: "Olma", price: 5000 },
    { name: "Banan", price: 3000 },
    { name: "Apelsin", price: 7000 }
];
console.log(calculateTotal(products));
// 2
function greet(name, greeting = "Hello") {
    return `${greeting}, ${name}!`;
}
console.log(greet("Ali"));
console.log(greet("Ali", "Salom"));
// 3
function findMax(arr, compare) {
    if (arr.length === 0)
        return undefined;
    return arr.reduce((max, item) => (compare(item, max) > 0 ? item : max));
}
const numbers = [1, 5, 10, 3, 8];
console.log(findMax(numbers, (a, b) => a - b));
// 4
function fetchData(url) {
    return fetch(url).then(response => response.json());
}
fetchData('https://api.example.com/data').then(data => console.log(data));
// 5
function isString(value) {
    return typeof value === "string";
}
function isNumber(value) {
    return typeof value === "number";
}
console.log(isString("Hello"));
console.log(isNumber(42));
console.log(isString(42));
// 6
function processValue(value) {
    if (isString(value)) {
        return `String qiymat: ${value}`;
    }
    else if (isNumber(value)) {
        return `Number qiymat: ${value}`;
    }
    else {
        return "Unknown value type";
    }
}
console.log(processValue("Salom"));
console.log(processValue(123));
console.log(processValue(true));

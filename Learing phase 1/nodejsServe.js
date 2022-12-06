const prompt= require("prompt-sync")({ sigint : true})
let a= prompt("Enter your age: ")
a=Number.parseInt(a);
console.log(typeof a)
const prompt= require("prompt-sync")({ sigint : true})
let a=Number.parseInt(prompt("Enter Age: "));
if(a%2==0)
console.log("Age divisible by 2")
if(a%3==0)
console.log("Age divisible by 3")
else
console.log("Age is not divisible by either 3 or 2")

console.log(a>18?"Can Drive":"Cannot Drive")
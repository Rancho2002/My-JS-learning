let arr=[2,3,4,5,6,"nice",7,8,9]
//! Classic For loop
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

//! ForEach loop
// arr.forEach((element)=>{
//     console.log(element)
// })

// let str1="";
// arr.forEach((element)=>{
//     str1=str1+Number.parseInt(element*element);
// })
// console.log(Array.from(str1))


//! Array.from method
// Array.from helps converting htmlcollection to array
let str="Arijit"
let convert=Array.from(str)
console.log(str,convert)

//! for...in loop --> i will be index here
for(let i in arr)
console.log(i)

//! for...of loop --> i will be element here
for(let i of arr)
console.log(i)
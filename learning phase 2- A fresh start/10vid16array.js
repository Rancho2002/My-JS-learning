let arr=[3,2,32,null,3,43,true,"nice",21,Symbol("kaise ho")]

console.log(arr[9])
console.log(arr[8])
arr[9]= 89 //! arrays are mutable but strings are immutable
console.log(arr.length)
console.log(typeof arr)
console.log(arr)
for(let i=0;i<arr.length;i++)
console.log("The elements are ",arr[i])

// Array methods

// ! toString, join, pop, push, shift, unshift

// let b=arr.toString();
// console.log(b, typeof(b), b[1])
// let c=arr.join("")
// console.log(c)
let d=arr.pop()
console.log(arr,d)
let e=arr.push(342) // .push returns the new length
console.log(arr,e)

// let f=arr.shift()
// console.log(arr, "element is",f)
let f1=arr.unshift(319)
console.log(arr, "element is",f1)



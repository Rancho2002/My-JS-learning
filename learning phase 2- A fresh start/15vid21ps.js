const prompt=require("prompt-sync")({sigint:true})

//! Q1:
// let arr=[];
// let len=Number.parseInt(prompt("Enter array length: "))
// for(let i=0;i<len;i++){
//     arr.push(Number.parseInt(prompt(`Enter element ${i+1}: `)))
// }
// console.log(arr)

//! Q2:
// let arr=[],i=0;
// do{
//     digit=Number.parseInt(prompt(`Enter element ${i+1}: `));
//     arr.push(digit);
//     i++;
// }while(digit!=0);
// console.log(arr)

//! Q3:
// let arr=[29,23,30,10,39,40,34,60]
// let newArr=arr.filter((element)=>{
    //     return element%10==0;
    // })
    // console.log(newArr)
    
    
//! Q4
// let arr=[3,4,5,6,7,8,9]
// let newArr=arr.map((element)=>{
//     // return element**2;
//     return element*element;
//     // return Math.pow(element,2);
// })

// console.log(newArr)

//! Q5 : find factorial
let a=parseInt(prompt("Enter number: "))
let arr=[]
for(let i=1;i<a+1;i++)
arr.push(i)

let factorial=arr.reduce((v1,v2)=>{
    return v1*v2;
})

console.log(factorial)
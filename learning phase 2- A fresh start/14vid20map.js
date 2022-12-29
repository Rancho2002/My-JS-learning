let arr=[3,4,5,6]

//! Array map method:  not only printing elements but also returns a new Array which make differ from foreach
let newArr= arr.map((element,index,array)=>{
    // console.log(element,index,array)
    return element+index;
})


//! array filter method(returns a new array)
let newArr2=arr.filter((element)=>{
    return element<5;
})
console.log(newArr)
console.log(newArr2)

//! array reduce method(returns a value)
arr=[2,3,4]
// let newArr3=arr.reduce((h1,h2)=>{
//     return h1+h2;
// })
const plus=(h1,h2)=>{
    return h1+h2;
}
let newArr3=arr.reduce(plus)// reduce takes a function and sends values to it. Just like sort()

console.log(newArr3)// 2+3=5--> 5+4=9// 9 is output
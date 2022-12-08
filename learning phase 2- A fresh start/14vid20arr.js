let arr=[3,4,5,6]

//! Array map method:  not only printing elements but also returns a new Array which make differ from foreach
let newArr= arr.map((element,index,array)=>{
    // console.log(element,index,array)
    return element+index;
})


//! array filter method
let newArr2=arr.filter((element)=>{
    return element<5;
})
console.log(newArr)
console.log(newArr2)
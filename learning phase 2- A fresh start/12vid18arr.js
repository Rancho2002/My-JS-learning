let arr=[3,4,5,66,6,7,8,9,1,2]
let chk=arr.splice(4,5,39,31,0103,3902)//! a bug when adding 0103,, pls look later
console.log(arr,"chk= ",chk) // returned how many elements deleted
console.log(typeof chk)

let newArr=arr.slice(3,5)
console.log(newArr)
xy=[4,2,1]
console.log(typeof xy)
// Some more arr methods:
//! delete(this is a operator not method), concat, sort, sort(compare), reverse, splice, slice
let arr=[2,1,4,5,9,8]
delete arr[0]
console.log(arr)
// for (let i = 0; i < arr.length; i++)
//     console.log(arr[i]);
let arr1=[93,28,39]
let newArr=arr.concat(arr1)
console.log(arr,arr1,newArr) // every arr remains same :)

//! Sorting in JS
const compare=(a,b)=>{
    return a-b
}
let sortArr=[93,22,19,309,92,38,63,73]
console.log(sortArr.sort())
console.log(sortArr.sort(compare))
// console.log(sortArr.reverse())

/*When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.
Example:

The compare function compares all the values in the array, two values at a time (a, b).

When comparing 40 and 100, the sort() method calls the compare function(40, 100).

The function calculates 40 - 100 (a - b), and since the result is negative (-60),  the sort function will sort 40 as a value lower than 100.
*/


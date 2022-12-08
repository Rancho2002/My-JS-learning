// normal for loop
for (let i = 0; i < 5; i++) {
    console.log(i)  
}

//! for-in loop
let obj=
{
    harry:32,
    arijit: 35,
    osnia: 39
}
for(let a in obj){
    console.log(`The marks of ${a} is ${obj[a]} `)
}

//! for-of loop (must be iterable(which can be loop through)- array or string)
for(let b of "harry")
console.log(b)
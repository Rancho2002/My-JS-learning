console.log('We are at tut 3')
// const roll=[3,2,4,1,7,6,9]
// const fruits=['orange','mango','melon']
// const mix=['str1',3,true,null]
// const a= new Array(3,2,'nice',true,'mango')
// console.log(a,roll,fruits,mix)
// console.log(roll.length)//length is property, so doesnot require paranthesis
// console.log(Array.isArray(roll))//isArray is method. It tell whether this named array is available in this file.
// console.log(mix.concat('samjhe chaparganju'))
// roll[0]='nice'
// console.log(roll)
// console.log(roll.indexOf(7))
// myObj={
//     name:'arijit',
//     roll:30,
//     dept: 'cse'
// }
// console.log(myObj)

// To check whether a varible exists or not
// let vari=5;

// if (typeof vari != undefined){
//     console.log('vari is defined')
// }
// else{
//     console.log('vari is not defined')
// }

// {
//     let age=18;
//     let doesDrive=true;

//     if (doesDrive && age>19){
//         console.log('U can drive.')
//     }
//     else if(doesDrive && age>17){
//         console.log('U have to create your own license.')
//     }
//     else{
//         console.log('U cannot drive')
//     }
// }

// Ternary operator
// let age=44;
// console.log(age==45?'age is 45':'age is not 45')

// switch (age) {
//     case 45:
//         console.log('You are 45')
//         break;  

//     default:
//         console.log('you are not budda')
//         break;
// }

obj = {
    name: 'Arijit',
    task: 'Web Design',
    passion: 'learning',
    morning_duty: 'javascript'
}
console.log(obj)
// console.log(obj['name'])


// for (let key in obj){
//     console.log(`The ${key} of ${obj['name']} is ${obj[key]}`)
// }
for (let key in obj) {
    console.log(`The ${key} of ${obj.name} is ${obj[key]}`)
}

console.log('Date and time')
oneToten=[1,2,3,4,5,6,7,8,9,10]
console.log(oneToten.length)
for (let i = 0; i < oneToten.length; i++) {
    const element = oneToten[i];
    console.log(element)
    console.clear()
    
}
let today=new Date();
let otherDate= new Date('10-04-2002 04:45 pm')
// otherDate=new Date('Oct 4 2002 22:32:09')
// otherDate=new Date('10/04/2002')
console.log(otherDate)
let a;
a=otherDate.getDay()
a=otherDate.getDate()
a=otherDate.getMinutes()
a=otherDate.getSeconds()
a=otherDate.getHours()
a=today.getTime()
a=otherDate.getMilliseconds() 
a=otherDate.getMonth()
console.log(a);
otherDate.setDate(2)
otherDate.setFullYear(1998)
otherDate.setMinutes(16)
otherDate.setHours(21)
console.log(otherDate)
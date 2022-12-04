// alert('Click');
// document.write("Paragraph written in JS")
// 1.JavaScript console API(Application Programming Interface)
/*console.log("Hello World", 5 + 9.8, "another log");
console.warn("This is Warning");
console.error("This is error");*/

//Variables In JS
var number1=23;
var number2=34;
// console.log(number1+number2);

//datatypes
//numbers
var num1=45;
var num2=32.34;
//string
var str1="This is string";
var str2="This is also string";
//object
var marks={
    arijit:99.7,
    harry:99.8
}
// console.log(marks)

//Boolean
var a=true;
var b=false;
// console.log(a,b)

// var und=undefined;
var und
// console.log(und);

//
var und=null
// console.log(und);

//datatypes
// 1.Primmitive Data Type:undefine,null,number,string,boolean,Symbol(it stores in stack)
// 2.Reference Data type: Arrays,Object literals,functions,dates(it stores in heap)

// data type casting
{
    let a = (34);
    a=String(34)
    console.log(typeof a)
    console.log(a.toString())
    a=JSON.stringify(a)
    console.log(typeof a)
    
}
{
    let b=Number('33.332')
    let c=parseInt('34.333')
    console.log(b.toFixed(1))
    console.log(b,c)
}

var arr=[1,3,4,'nacho',true]
// console.log(arr)

var x=40;
var y=20;
// console.log('The value of x + y is',x+y);
// console.log('The value of x - y is',x-y);
// console.log('The value of x * y is',x*y);
// console.log('The value of x / y is',x/y);
var c=x;
c +=2;
c -=2;
c *=2;
c /=2;
// Now this will first add 2 in c then substract 2 then multiply with 2 and atlast divide with 2 then print the last quotient result in console
// console.log(c)

//Comparison operators
// var a=3;
// var b=2;
// console.log(a>b);
// console.log(a==b);

//Logical And OR NOT operator
// AND
// console.log(true && true);
// console.log(false && true);
// console.log(true && false);
// console.log(false && false);
// // OR
// console.log(true || true);
// console.log(false || true);
// console.log(true || false);
// console.log(false || false);

// //NOT
// console.log(!true);
// console.log(!false);

//functions
function avg(a,b){
        c=(a+b)/2
        return c
    }
// DRY = Do not Repeat Yourself
c1=avg(3,1)
c2=avg(23,39)
// console.log(c1,c2)

// conditionals in JavaScript

age=18;
// if-else statement
// if(age>18){
//     console.log('You can learn that.')
// }
// else{
//     console.log('Do not try to learn that.')
// }


//If else snippet
// var age = n;
// var voteable = (age<18)?"Too young":"Old enough";
// this print too young as age is less than 18



// if-else ladder
// var age=28;
// if (age>30){
//     console.log('Dont take Gutka')

// }
// else if(age>25){
//     console.log('Learn the side effect of Gutka')
// }
// else if(age>20){
//     console.log('Make social awarness about the side effects of Gutka!')
// }
// else{
//     console.log('Run when you see Gutka')
// }
// console.log('End of if else ladder .')

// var arr=[1,2,3,4,5,6,7]
// console.log(arr)
// for loop
// for(var i=0;i<arr.length;i++){
//     if(i==2){
//         // break
//         continue
//     }
//     console.log(arr[i])
// }

// foreach loop

// arr.forEach(function(element,array,index){
//     console.log(element,index,array)
// })

// const ac=4;
// ac++
// console.log(ac)

// var array=[1,2,3,4,5,6,7,8,9,0];
// let j=0;

// The scope of let is limited and block level. It's effect are act inside curly braces only that mean inside function only.

// while(j<array.length){
//     console.log(array[j]);
//     j++;
// }

//The difference between 'do' and 'while' loop is first it run 'do' in case of 'do' and then check the condition, so if condition does not match it shows undefined but in 'while' , nothing will be shown. 


// do{
//     console.log(array[j]);
//     j++;
// }while(j<array.length)

let myArray=['Fan','Car', null, true];
// Array method
myArray.pop();
myArray.push('Harry')
myArray.shift()
myArray.unshift('Dinchak')
myArray.sort()
myArray.splice(2,1)
myArray.reverse()
myArray=myArray.concat([1,2,'hello'])
// console.log(myArray)

// EXPLORE MORE ARRAY METHODS IN INTERNET 

// Strings methods in Javascript
let myString='Arijit has learning attitude and has a laptop.';
// console.log(myString.length);
// console.log(myString.indexOf('learning'))
// console.log(myString.lastIndexOf('has'))
// console.log(myString.slice(0,10));
// d=myString.replace('Arijit', 'Arijit Ghosh') // replace only change the first occurence.
// console.log(d, myString)

let myDate= new Date();
// console.log(myDate);
// console.log(myDate.getHours())
 
// DOM Manipulation
// console.log(document)
// document.location

document.getElementById('click').style.border='2px solid blue'
let elem= document.getElementById('click');
// console.log(elem)
let elemclass=document.getElementsByClassName('container')
// console.log(elemclass)
elemclass[0].style.background='yellow'; 
elemclass[0].style.border='2px solid black'; 
elemclass[1].classList.add('bg-primary')
// console.log(elem.innerHTML)
// console.log(elem.innerText)
// console.log(elemclass[0].innerHTML)
// console.log(elemclass[1].innerText)
let tn=document.getElementsByTagName('div');
// console.log(tn);
let createdElement=document.createElement('p')
createdElement.innerText=('This is paragrpah wriiten by JS');
let createdElement2=document.createElement('b')
createdElement2.innerText='this is bold';
tn[0].appendChild(createdElement);
// tn[0].removeChild(createdElement)
tn[0].replaceChild(createdElement2,createdElement )
/*
console.log(document.scripts);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.URL);
console.log(document.domain);
*/
/*
Query Selector
qs=document.querySelector('.container');
console.log(qs);
Qs=document.querySelectorAll('.container');
console.log(Qs);
cs=document.querySelector('#click');
console.log(cs)
*/


// Events in JavaScript
function clicked(){
    console.log('Button pe click hua.')
}
window.onload=function(){
    console.log('Page reloaded.');
}
//The difference in between 'targetting Id by making a variable' and 'directly target Id'is vs code gives hint while writing the code in Case 1.

let adl=document.getElementById('firstcontainer')
adl.addEventListener('click',function(){
    // console.log("Ho gya Click by addEventListener")
})

// firstcontainer.addEventListener('click',function(){
//     console.log("Ho gya Click by addEventListener")
// })
/*
firstcontainer.addEventListener('mouseover',function(){
    console.log("Mouse on by addEventListener")
})
firstcontainer.addEventListener('mouseout',function(){
    console.log("Mouse out by addEventListener")
})
firstcontainer.addEventListener('mouseup',function(){
    console.log("Click On the container by mouse")
})
firstcontainer.addEventListener('mousedown',function(){
    console.log("Chala gya mouse down from container by mouse")
})
*/
// EPIC CONCEPT IS HERE


let prevHtml=document.querySelectorAll('.container')[1].innerHTML;

// firstcontainer.addEventListener('mouseup',function(){
//     document.querySelectorAll('.container')[1].innerHTML=prevHtml
//     console.log('mouse up')
// })
// firstcontainer.addEventListener('mousedown',function(){
//     document.querySelectorAll('.container')[1].innerHTML='<b>Finally I changed the website.</b>'
//     console.log('mouse up')
// })


// Arrow Function 

// function summ(a,b){
//     c=a+b;
//     return c;
// }
// summ= (a,b)=>{
//     c=a+b;
//     return c;
// }

logKaro =()=>{
    document.querySelectorAll('.container')[1].innerHTML="<b>Changing with set timeout</b>"
    console.log('I am your log')
}

// setTimeout(logKaro,5000); // Changing only one time.
// clr =setInterval(logKaro,2000);

// Use clearInterval(clr) AND clearTimeout(clr) TO STOP setInterval AND setTimeout


// setTimeout(() => {
//     logKaro()
// }, 5000);
// previoushtml=()=>{
//     document.querySelectorAll('.container')[1].innerHTML=prevHtml;

// }

// setTimeout(previoushtml,3000);
// clr =setInterval(previoushtml,4000);

// JavaScript localStorage
localStorage.setItem('name','Arijit')
// localStorage.clear()
// localStorage.removeitem('name')
// localStorage.getItem('name')

// JSON---> JavaScript Object Notation 

// obj={'name':'Arijit','lenght':2,'value':4.5,'property':'Arijit"s'}
obj={'name':'Arijit','lenghth':2,'value':4.5,'a':{'property':"Arijit's"}}
js=JSON.stringify(obj)
console.log(typeof obj)
console.log(typeof js)
// console.log(obj)
console.log(js)
parsed=JSON.parse(`{"name":"Arijit","lenghth":2,"value":4.5,"a":{"property":"Arijit's Data"}}`) //should be written inside backticks
console.log(parsed)
console.log(typeof parsed)

// Template literals - Backticks
a=34
b=29;
console.log(`this is ${a+b}`)


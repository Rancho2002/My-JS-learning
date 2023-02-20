const prompt= require("prompt-sync")({ sigint : true})
let a= prompt("Enter your age: ")
a=Number.parseInt(a);
console.log(typeof a, "a=",a)

// Next level swich case in javascript

// let b= parseInt(prompt("Enter your age: "))
/*
switch (true) {
    case b>34:
    case b<50:
        console.log("You can drive")
        break;

    case b>50:
    case b<80:
        console.log("you are a senior")

    default:
        console.log("This is not string")
        break;
}
! conclusion: take switch as C nothing more than that.
*/


switch (a) {
    case 1:
        console.log("1 is typed")
        break;
    case 2:
        console.log("2 is typed")
        break;
    case 3:
        console.log("3 is typed")
        break;
    case 4:
        console.log("4 is typed")
        break;

    default:
        console.log("you typed any key after 4")
        break;
}


console.log(parseInt(prompt("Enter marks: "))>44?"passed":"fail")
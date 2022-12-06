const prompt= require("prompt-sync")({ sigint : true})

const marks=
{
    Arijit: 90,
    Harry: 85,
    Shubham: 49,
    Disha: 60
}

console.log("\nProblem no 1\n")

let arr=Object.keys(marks);
for(let i=0;i<arr.length;i++){
    console.log(arr[i]+" = "+ marks[arr[i]])
}

console.log("\nProblem no 2\n")

for(let keys in marks){
    console.log(keys+" = "+marks[keys])
}
console.log("\nProblem no 3\n")

let cn=34;
let guess;
let i=0
while(guess!=cn){
    if(i!=0){
        console.log("Try again.");
    }
    i+=1
    guess=prompt("Guess number: ")
}
console.log("You guessed it right. Attempts took: ",i)

const mean=(a,b,c,d,e)=>{
    return (a+b+c+d+e)/5;
}
console.log(mean(3,302,302,20,30))
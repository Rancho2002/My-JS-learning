const prompt= require("prompt-sync")({sigint:true})

// myname=prompt("Enter your name: ")
myname="arijit GHosh"
let str=`my name is ${myname}` // ! this is called template literal as well as string interpolation
console.log(str)

// String methods
console.log(myname.toUpperCase())
console.log(myname.toLowerCase())
console.log(myname.length)
console.log(myname.slice(7,11))
console.log(myname.indexOf("GHosh"),": index of GHosh")
console.log(myname.replace('GHosh','singh'))
console.log(myname.concat(" is a friend of Niloy"))
console.log("       ram      sam     jodu       ".trim(),"samja?")
console.log("       ram      sam     jodu       ","samja?")
let str="a quick brown fox jumps over the lazy dog."
let word="foxxy sexy"
console.log(`The word ${word} ${str.includes(word)?"is":"is not"} present in the string.`)
console.log(str.startsWith("the"),str.endsWith("dog."))
console.log(str.toUpperCase())
let str2="Please give me Rs. 1000"
console.log(str2.slice("Please give me Rs.".length+1,))
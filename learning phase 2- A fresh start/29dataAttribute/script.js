let first=document.getElementById("first")
let a=first.getAttribute("class")
console.log(a)
console.log(first.hasAttribute("class"))
console.log(first.hasAttribute("style"))
// console.log(first.setAttribute("hidden","false")) // in both case hidden not work, it acts as true
// console.log(first.setAttribute("hidden",false)) // in both case hidden not work, it acts as true
console.log(first.setAttribute("class","kaise ho vmro"))
console.log(first.attributes)

console.log(first.dataset)
console.log(first.dataset.name)
let id1=document.getElementById("id1")
let sp1=document.getElementById("sp1")

console.log(id1.matches(".box"))//return true or false by checking the css selector
console.log(sp1.closest(".box"))//check whether sp1 has box class, if not go to its parent element and if found return the element
console.log(id1.contains("#sp1"))//check whether sp1 is present inside its child if found return true 
// first.className = "text-black red"// add "text-black red" class removing everything old in first
first.classList.add("red") // append technology
console.log(first.getAttribute("class"))
first.classList.remove("red")
console.log(first.classList.contains("red"))// return false as removed in previous line
// first.classList.toggle("red")
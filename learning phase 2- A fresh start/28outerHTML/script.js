console.dir("span")// to get a tag in its object form
console.log(document.body.firstElementChild.outerHTML) // to get a tag in its html form and its children as well
console.log(document.body.firstElementChild.innerHTML) // to get its children only
console.log(document.body.firstElementChild.nodeName)
console.log(document.body.firstChild)
console.log(document.body.firstChild.nodeName)
// ! innerHTML only works for element
// FOR other cases:
console.log(document.body.firstChild.data)
console.log(document.body.firstChild.nodeValue)
console.log(document.body.firstChild.textContent)
first.hidden=false; //! first mean document.getElementById("first")




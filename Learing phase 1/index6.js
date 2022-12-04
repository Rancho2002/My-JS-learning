console.log('we are at tut6')
let cont=document.querySelector('.no')
let dont=document.querySelector('.container')

nodename=dont.childNodes[2].nodeName
nodetype=dont.childNodes[6].nodeType
// console.log(nodename)
// console.log(nodetype)
/*
Node type:
1. element
2. attribute
3. text
8. comment
9. document
10. doctype
*/
let list;
list=document.querySelector('.container')
// list=list.firstChild
// list=list.firstElementChild
// list=list.firstElementChild.parentNode
// list=list.firstElementChild.nextElementSibling
list=list.firstElementChild.nextElementSibling.nextElementSibling
// list=list.lastElementChild
// list=list.childElementCount
// list=list.children[2].children[0].children
console.log(list)
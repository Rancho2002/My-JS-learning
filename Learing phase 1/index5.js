console.log('We are at tut5')

let element=document.getElementById('click')
// element=element.className
// element=element.childNodes;
// element=element.parentNode;
// console.log(element)

element.style.color='red';
element.innerText="Click karo re baba"
element.innerHTML='<b>ab deep deep lagega</b>'
// console.log(element)
let sel;
sel=document.querySelector('#click')
sel=document.querySelector('.clicke')
sel=document.querySelector('div')
sel.style.fontWeight='1000'
sel.style.color=('green')
// console.log(sel)

// Above syntax are single element selector


// Multi element selector
elem=document.getElementsByClassName('child')
elem=document.getElementsByTagName('div')

for (let index = 0; index < elem.length; index++) {
    const element = elem[index];
    element.style.color='purple'
    
}
// Array.from(elem).forEach(element => {
//     console.log(element)
//     element.style.color='blue'
// });
// console.log(elem)

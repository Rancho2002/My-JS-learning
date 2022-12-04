console.log('we are at tut 7')
let element=document.createElement('li')
let text=document.createTextNode('Chak de India, I am text node.')
// element=element.appendChild(text)-----> This is wrong
element.appendChild(text)
// element.className=('fuckUgate')
element.id='jswala'
element.setAttribute('class','classJs, maza')
let dom=document.querySelector('ul')

dom.appendChild(element)

console.log(element)
console.log(dom)
let replace=document.querySelector('.maza')
console.log(replace)

replace.innerHTML='<h3>new heading by JS</h3>';

let elem2=document.createElement('h4')
elem2.setAttribute('id','elem2');
elem2.className='elem2'
let tnode=document.createTextNode('JavaScirpt is fun.')
elem2.appendChild(tnode)
// element.replaceWith(elem2)
console.log(elem2.children)
console.log(elem2)

// let lui=document.getElementById('lui')
// phi.replaceWith(replace,document.getElementById('phi'))
let bujli=document.getElementById('bujli')//this target ul id, now i am going to replace inside a li id, so i need another id of that particular list.

////EPIC CONCEPT HERE ^

// bujli.replaceWith(elem2,document.getElementById('lui'))
bujli.replaceChild(elem2,document.getElementById('lui'))

bujli.removeChild(document.getElementById('phi'))


// let pr=elem2.hasAttribute('class')
let pr=elem2.hasAttribute('idk')
console.log(elem2.getAttribute('id'))
elem2.removeAttribute('id')
console.log(elem2)
console.log(pr)

//practice work

let t1=document.createElement('h1');
let t2=document.createTextNode('Go to CodeWithHarry');
t1.className='newhead';
t1.setAttribute('id','newhead');
t1.appendChild(t2);
console.log(t1)
// let dom1=document.querySelector('h1')
// dom1.appendChild(t1)
let t3=document.getElementById('t1');
t3.replaceChild(t1,document.getElementById('heading'))
console.log(t3)
let t4=document.createElement('a')
let t5=document.createTextNode(`Harry's Website`)

t4.setAttribute('href','https://www.codewithharry.com')
t4.setAttribute('title','CodeWithHarry')
t4.appendChild(t5)
console.log(t4)
let t6=document.getElementById('newhead')
t6.appendChild(t4)
console.log(t6)
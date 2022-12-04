// console.log('ok');

// Element1 = document.getElementById('elem1').addEventListener('click', func1);

// function func1(e) {
//     let addElem1 = document.createElement('input')
//     addElem1.setAttribute('type', 'text')
//     addElem1.setAttribute('id', 'text')

//     let existElement = document.getElementById('list')
//     existElement.replaceChild(addElem1, document.getElementById('elem1'))

//      document.getElementById('text').addEventListener('blur', func2);
//     function func2(e) {
//         let newLi = document.createElement('li')
//         let LiText=document.createTextNode(document.getElementById('text').innerText)
//         newLi.appendChild(LiText)
//         let existElement = document.getElementById('list')
//         existElement.replaceChild(newLi,document.getElementById('text'))

//     }


// } //:( not good and not working 


console.log('Ab samja')

// Create div

let newDiv=document.createElement('div')
newDiv.setAttribute('id','newdiv')
newDiv.setAttribute('class','newdiv')
newDiv.setAttribute('style', 'border:2px solid black; width: 154px; margin: 34px; padding:23px;');
let newText=document.createTextNode('Click to Edit the Text')


//insertion of text node
newDiv.appendChild(newText);

// insertion of div in document
let container=document.querySelector('.container')
let existId=document.getElementById('forjs')
container.insertBefore(newDiv,existId)
console.log(newDiv)

//adding event listener
document.getElementById('newdiv').addEventListener('click',function(){
    let html=newDiv.innerHTML
    newDiv.innerhtml=`<textarea name="form-control" class='textarea' id="textarea" rows="3">${html}</textarea>` ;
})
























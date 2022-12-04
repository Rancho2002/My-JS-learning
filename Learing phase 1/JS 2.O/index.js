console.log('This is practice.')
let existClass = document.querySelector('.container');
let createdDiv = document.createElement('div');
let existId = document.getElementById('elem');

let val=localStorage.getItem('text');
let text;
if (val==0){
    text=document.createTextNode('Click to Edit:::');
}
else{

    text = document.createTextNode(val);
}

createdDiv.setAttribute('id', 'newdiv');
createdDiv.setAttribute('class', 'newdiv');
createdDiv.setAttribute('style', 'border:2px solid blue; width:294px ;height:100px;');

createdDiv.appendChild(text);

existClass.insertBefore(createdDiv, existId)

document.getElementById('newdiv').addEventListener('click', function () {
    // console.log('That is JavaScript')
    let nooftextarea = document.getElementsByClassName('textarea').length;
    if (nooftextarea == 0) {
        let html = document.getElementById('newdiv').innerHTML;
        createdDiv.innerHTML = `<textarea name="textarea" class="textarea" id="textarea"  cols="37" rows="6">${html}</textarea>`
    }
    let blur = document.getElementById('textarea');
    blur.addEventListener('blur', function () {
        html = blur
        localStorage.setItem('text',textarea.value)


    })
})


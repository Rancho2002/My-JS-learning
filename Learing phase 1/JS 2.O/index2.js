console.log('this is my own practice')

let newdiv = document.createElement('div');
let existdiv = document.querySelector('.container');
let existid = document.getElementById('elem');

let text = document.createTextNode('Click Karo mujhe');
newdiv.appendChild(text);
newdiv.setAttribute('id', 'newid')
newdiv.setAttribute('class', 'newclass');
newdiv.setAttribute('style', 'border:2px solid red; width:500px;height:300px;position:relative;left:50%;font-size:30px;')



existdiv.insertBefore(newdiv, existid)

document.getElementById('newid').addEventListener('click', function () {
    let nooftextarea = document.getElementsByClassName('textarea').length;
    if (nooftextarea == 0) {
        let html = document.getElementById('newid').innerHTML;
        newdiv.innerHTML = `<textarea name="textarea" id="textarea" class='textarea'cols="30" rows="10" style="width:500px;height:300px;font-size:30px" >${html}</textarea>`
    }
    document.getElementById('textarea').addEventListener('blur',function () {
        // textarea.innerHTML=document.getElementById('textarea').innerHTML
        html=textarea.innerHTML;

    })


})
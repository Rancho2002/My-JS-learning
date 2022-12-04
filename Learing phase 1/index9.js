console.log('aur batao kaise ho!')
let btn=document.getElementById('btn');
btn.addEventListener('click',func1);
btn.addEventListener('dblclick',func2);
btn.addEventListener('mousedown',func3);
let twist=document.querySelector('.container')
twist.addEventListener('mousemove',func4);

function func1(e){
    console.log('ok')
    e.preventDefault()//prevent the submit button
}
function func2(e){
    console.log('double click ok')
    e.preventDefault(window.alert('press again'))//prevent the submit button
}
function func3(e){
    console.log('Chal Hatttt!')
}

document.getElementById('heading').addEventListener('mouseenter',function(){
    console.log('Mouse enter hua heading me!!!!')
})

document.querySelector('.no').addEventListener('mouseleave',function(){
    console.log('Mouse leave hua pahela no class se!!!!')
})
id1=document.querySelector('.container');
function func4(e) {
    x=e.offsetX;
    y=e.offsetY;
    console.log(`Mouse move location : (${x},${y})`)
    id1.style.backgroundColor=`rgb(${x},${y},${200})`
}
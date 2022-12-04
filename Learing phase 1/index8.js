console.log('why people say me man!')

document.getElementById('heading').addEventListener('click', function () {
    console.log('javascript is fun.')
})
document.querySelector('#btn').addEventListener('mouseover', function () {
    console.log('javascript is fun.')
    let a1 = document.getElementById('btn')
    // let b=document.createElement('p')
    a1.setAttribute('title', 'Click Kar re Baba')
    let a2 = document.createElement('h1')
    a2.setAttribute('id', 'help')
    let a4 = document.createTextNode('Kaisa laga mera mazak');
    a2.style.color = 'red'
    a2.appendChild(a4)

    let sj = document.getElementById('t1')
    sj.replaceChild(a2, document.getElementById('heading'))
    console.log(sj)
    // document.getElementById('help').addEventListener('click', func1);
    // function func1() {
    //     let x1 = document.createElement('h1')
    //     let x2 = document.createTextNode('We are at tut 6 and onwards');
    //     x1.appendChild(x2)

    //     x1.setAttribute('id', 'heading')
    //     x1.setAttribute('class', 'heading')

    //     x1.replaceChild(sj,document.getElementById('help'))
    // }
    // b.setAttribute('id','btn1')
    // let c=document.createTextNode('Click kor re baba!!!!')
    // b=b.appendChild(c)
    // a1.appendChild(b)

})   //MISSSION FAILED:(


// document.getElementById('child').addEventListener('click', function (e) {
//     let variable;
//     //e.target gives an element
//     // variable=e.target.id;
//     // variable=e.target.className;
//     variable = e.target.classList;
//     // variable=e.offsetX;
//     // variable=e.offsetY;
//     variable=e.clientX;
//     variable=e.clientY;
//     // variable = Array.from(variable)
//     // variable.forEach(element => {
//     //     console.log(element)
//     // });
//     console.log(variable)
//     console.log(e)
//     console.log('javascript is fun.')
// })
let a=document.querySelector(".first")
const sum=(x,b)=>{
    a.innerHTML=x+b
}
setTimeout(() => {
    a.innerHTML+="  "+4239*39293
}, 5000);


setTimeout(sum,4000,9,3) //! setTimeout first takes function then time then function arguments :)
let i=0
let ab=setInterval(() => {
    if(i) clearInterval(ab)
    console.log(ab)
    alert("hello")
    i++;
}, 6000);
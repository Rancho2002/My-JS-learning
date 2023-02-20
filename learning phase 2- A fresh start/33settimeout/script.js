let a=document.querySelector(".first")
const sum=(x,b)=>{
    a.innerHTML=x+b
}
let a1=setTimeout(() => {
    a.innerHTML+="  "+4239*39293
}, 5234);
console.log(a1)

// setTimeout(sum,4000,9,3) //! setTimeout first takes function then time then function arguments :)
let i=0
let ab=setInterval(() => {
    if(i==1) clearInterval(ab)
    console.log(ab,i)
    alert("hello")
    ++i;
}, 6000);
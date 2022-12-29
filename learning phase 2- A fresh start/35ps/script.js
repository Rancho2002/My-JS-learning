let a=document.getElementsByTagName("button")
a=Array.from(a)
const alertBtn=(msg)=>{
    alert(msg);
}
for (let i=0;i<a.length;i++){
    a[i].addEventListener("click",function(){
        alert(`Hello you have clicked button ${i+1}`)
    })
}
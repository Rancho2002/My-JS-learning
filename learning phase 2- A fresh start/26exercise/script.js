let q1=document.getElementsByTagName("nav")[0].querySelector(".navbar-brand");
// console.log(q1)
q1.style.color="red";

let q2= document.querySelectorAll(".container")[0]
q2.firstElementChild.style.color="green"
q2.lastElementChild.style.color="green"

let q3=document.getElementsByTagName("li");

q3=Array.from(q3);
console.log(q3)
q3.forEach(element => {
    element.style.background="cyan";
});
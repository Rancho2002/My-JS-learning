//! Handling Browser Events

let x = function(event) {
    console.log(event.target)
    console.log(event.type, event.clientX, event.clientY)
    // alert("Hello World1!")
  }
  
  let y = function(e) {
    console.log(e)
    alert("Hello World2!")
  }

  const sunao=()=>{
    console.log("Right click mat dabao")
  }
  const sunao2=()=>{
    console.log("keydown mat dabao")
  }
  
  const sunao3=()=>{
    console.log("keydown mat dabao")
  }
  
  btn.addEventListener('click', x)
  btn.addEventListener("contextmenu",sunao)
  btn.addEventListener("keydown",sunao2)
  btn.addEventListener("keyup",sunao3)
  window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});
  
  // btn.addEventListener('click', y)
  
  // let a = prompt("What is your favorite number?");
  
  
  // if (a == "2") {
  //   btn.removeEventListener('click', x)
  // }
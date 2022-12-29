let elem= document.getElementsByTagName("div")[0]

// elem.innerHTML+="<H1>NICE BRO</H1>";

let div=document.createElement("div")
div.innerHTML="<i>chal matlab kuchbi</i>"
elem.appendChild(div)


elem.append(div);
// elem.prepend(div);
elem.before(div);
// elem.after(div);
elem.replaceWith(div);
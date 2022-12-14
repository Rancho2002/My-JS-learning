alert("Hello your script works")

let a= parseInt(prompt("Enter the value of a: ","e.g. 18"))
alert("You entered a of type, " + typeof a)
if(confirm("Are you sure to write a in document?"))
document.write(a)
else
document.write("Need confirmation before writing a on documents")

// disadvantages:
// old look( modal are way better )
// execution thread blocked
// not good for frontend
// advantages:
// best for admin panel
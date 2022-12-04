console.log('vag bhosdk')

let a = document.links;
// console.log(a)
Array.from(a).forEach(function (element) {
    if (element.href.includes('harry')) {
        console.log(element)
    }
})
// console.log(b)
// let a = document.links;

// Array.from(a).forEach(function (element) {
//     if (element.href.includes("javascript")) {
//         console.log(element.href);
//     }
// }
// );

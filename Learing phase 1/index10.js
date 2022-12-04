console.log('Welcome to Local storage')
bff=['maggi','chai','biriyani','momos']


// Set key value pair item in local storage
window.localStorage.setItem('name1','Arijit')
window.localStorage.setItem('name2','Rohan')
// localStorage.setItem('Engineer Special',bff)
localStorage.setItem('Engineer Special',JSON.stringify(bff))

//clear all item of local storage
// localStorage.clear();

//clear specific key of local storage
// localStorage.removeItem('name2')

//Retrive item of local storage
// let getItem=localStorage.getItem('name2')
let getItem=JSON.parse(localStorage.getItem('Engineer Special'))

console.log(getItem)

//session storage

sessionStorage.setItem('sessionname1','Arijit')
sessionStorage.setItem('sessionname2','Rohan')
// localStorage.setItem('Engineer Special',bff)
sessionStorage.setItem('sessionEngineer Special',JSON.stringify(bff))
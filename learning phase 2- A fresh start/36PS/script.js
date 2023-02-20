let time = document.getElementById("time");
let date= document.getElementById("date");

// console.log(hour,min,sec,date,month,year);
setInterval(() => {
  let a = new Date();
//   let hour = a.getHours();
//   let min = a.getMinutes();
//   let sec = a.getSeconds();
//   hour=hour<10?"0"+hour:hour;
//   min=min<10?"0"+min:min;
//   sec=sec<10?"0"+sec:sec;
//   time.innerText = hour + ":" + min + ":" + sec;
// time.innerText=a.toTimeString().slice(0,8);
time.innerText=a.toLocaleTimeString();

}, 1000);

setInterval(() => {
  let a = new Date();
//   let day = a.getDate();
//   let month = a.getMonth() + 1;
//   let year = a.getFullYear();
//   day=day<10?"0"+day:day;
//   month=month<10?"0"+month:month;
//   year=year<10?"0"+year:year;
//   date.innerText = day + "/" + month + "/" + year;
date.innerText=a.toDateString();
// date.innerText=a.toLocaleDateString()
}, 2000);

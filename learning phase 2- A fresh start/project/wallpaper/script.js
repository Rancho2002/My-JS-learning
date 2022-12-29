let time = new Date().toTimeString();
// let time=prompt("enter time")
time = time.slice(0, 2);

// if(time.includes(":")){

//     time=time.replace(":",'');
//     time=0+time
// }

time = parseInt(time);
body = document.querySelector("body");
if (time > 24 || time < 0) {
  document.write("<h1>invalid time</h1>");
} else {
  if (time >= 5 && time < 12) {
    body.style.background = "url(./photos/morning.webp)";
  } else if (time >= 12 && time < 18) {
    body.style.background = "url(./photos/afternoon.webp)";
    console.log("hwwy");
  } else if (time >= 18 && time < 21) {
    body.style.background = "url(./photos/night.webp)";
  } else {
    body.style.background = "url(./photos/deepnight.webp)";
  }
}

const date = new Date();
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const daysName = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let displayTime = document.getElementById("time");

let min= parseInt(date.getMinutes()),hour=parseInt(date.getHours());


if(min<10) min="0"+min;
if(hour<10) hour="0"+hour;

displayTime.innerHTML = hour + ":" + min;


let displayDateHTML=document.getElementById("date")
let displayMonth = monthNames[date.getMonth()];
let displayDay = daysName[date.getDay()];
let displayDate = date.getDate();


displayDateHTML.innerHTML=displayDay+", "+`<nobr>${displayDate} ${displayMonth}</nobr>`;


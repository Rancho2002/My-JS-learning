jokes=['Why did the scarecrow win an award?<br><u> Because he was outstanding in his field</u>.', 'Why did the melon jump into the lake?<br><u> It wanted to be a water-melon</u>.', 'What did the duck say when it bought lipstick?<br><u> Put it on my bill</u>.', 'What do you call a pig that does karate?<br><u>A pork chop</u>.', "What has a bed that you can't sleep in?<br><u> A river.", 'Why were the teacher\'s eyes crossed?<br><u> She couldn\'t control her pupils</u>.', 'What starts with E, ends with E, and has only 1 letter in it?<br><u> An Envelope</u>.', 'How does the ocean say hello?<br><u> It waves</u>.', 'What lights up a soccer stadium?<br><u> A soccer match</u>.', 'What creature is smarter than a talking parrot?<br><u> A spelling bee</u>.', 'Which U.S. state has the smallest soft drinks?<br><u> Minnesota (as in, mini-soda)</u>.', "Why couldn't the leopard play hide and seek?<br><u>Because he was always spotted.", "Apparently, you can't use beef stew as a password. It's not stroganoff.", 'Why did the drum take a nap?<br><u> It was beat</u>.', 'Where do hamburgers go dancing?<br><u> They go to the meat-ball</u>.', 'Why did the tomato turn red?<br><u> It saw the salad dressing</u>.', 'Why shouldn\'t you write with a broken pencil?<br><u> Because it\'s pointless</u>.', 'What do you call two monkeys that share an Amazon account?<br><u> Prime mates</u>.', "Why are teddy bears never hungry?<br><u> Because they're always stuffed!", 'Why did the tree go to the dentist?<br><u> It needed a root canal</u>.', "If athletes get athlete's foot, what do elves get?<br><u> Mistle-toes.", "Why couldn't the pony sing?<br><u> Because she was a little hoarse.", 'Where do cows go for entertainment?<br><u> The mooooo-vies</u>!', 'What do you call a pig that does karate?<br><u> A pork chop</u>.', 'How does NASA organize a party?<br><u> They planet</u>.', 'Why did Adele cross the road?<br><u>To sing, Hello from the other side</u>!', 'What runs around a yard without actually moving?<br><u> A fence</u>.', "What's an astronaut's favorite candy?<br><u> A Mars bar.", 'Where do sheep go to get their hair cut?<br><u> The baa-baa shop</u>.', 'Why are there gates around cemeteries?<br><u> Because people are dying to get in</u>.', 'What do you get when you cross a snake with a pie?<br><u> A pie-thon</u>!', 'Why is Peter Pan always flying?<br><u> He Neverlands</u>.', 'What\'s the most musical part of the chicken?<br><u> The drumstick</u>.']

let elem=document.getElementById("quote");
let index=parseInt((Math.random() *jokes.length));

elem.innerHTML="&quot;"+jokes[index]+"&quot;🤪";

const newjoke=()=>{
    // console.log(index)
    index=parseInt((Math.random() *  jokes.length));
    elem.innerHTML="&quot;"+jokes[index]+"&quot;";
}

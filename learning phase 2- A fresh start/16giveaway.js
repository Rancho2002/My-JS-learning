let original = Math.round((Math.random() * 100)), choice = 0, number;

do {
  number = Number.parseInt(prompt("Guess the number(within 100): "))
  if(number > original)
   console.log("Hint: enter a smaller number!!")
  else if(number<original)
    console.log("Hint: enter a greater number!!")
  choice += 1
} while (number != original)

console.log("Congrats you guessed it right! Your score", 100 - choice)
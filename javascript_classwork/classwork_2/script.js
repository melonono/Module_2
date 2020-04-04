
//Request a user’s age and define whether he/she is an infant (0–2), a child (3-11), a teen (12–18), an adult (19-60) or a senior citizen (60– ...). Display the result in the console.

let age = prompt("How old are you");
if (age <= 2){
  alert ("you a baby!");
} else if( age <= 11) {
  alert ("you are a child");
} else if (age <=18) {
  alert ("you are very much a teen");
} else if (age <=60) {
  alert ("you could be seen as an adult");
} else if (age >=60) {
    alert ("you living your best life as a senior");
}
//Request a number from 0 to 9 from a user and display the symbol that is placed on that keyboard button (for example, 1–!, 2–@, 3–# etc). Display a result in the console.

let number = prompt ("Choose a number between 0 to 9");
if (number == 0){
  console.log ("=");
} else if (number == 1){
  console.log ("!");
} else if (number == 2){ 
  console.log ("@");
} else if (number == 3){
  console.log ("#");
} else if (number == 4){
  console.log ("€");
} else if (number == 5){
  console.log ("%");
} else if (number == 6){
  console.log("&");
} else if (number == 7){
  console.log("/");
} else if (number == 8){
  console.log("(");
} else if (number == 9){
  console.log (")");
} 

//Ask a user 3 questions, each with 3 answer options. Write these options also in the prompt window, after a question. The user gets 2 points for each correct answer. Show the earned points after the test.

let answer1 = prompt (" How many big oceans are there? 4, 3 or 2?");
let answer2 = prompt ("What is a tomato? a banana, a fruit or a vegteble?")


//Request a number from a user, and define whether it is positive, negative, or zero. Display a resulting message as an alert.

//Request a user’s age and check whether it is realistic (0-120 y.o.). If it is realistic, display a message ‘Hi! You are # years old’, otherwise – ‘Hm… Is it even possible?

//difference between condtions and loops IS loops help you to do taskt repeatedly without having to write it out your self. Also you can write conditions inside loops. 


// One task to do using switch:
// Request a number of a month from a user. Print the name of the month to the webpage as a paragraph using document.write().



// One task using while loop:
// Request a number and an extent. Raise the number to the given power and display the result. Do not use ** or Math.pow() here.

// One task using do while loop:
// Suggest a user solve 2 + 2 * 2 until he/she does it right.

// And one task using for loop:
// Count sheep. Request a non-negative integer, 3 for example, and print a string with a murmur: “1 sheep...2 sheep...3 sheep...” to the page using document.write(). If a user types a negative number in, alert an error.




//prints only even numbers.
// 10 % 2 === 0
// 10/2 = 5

/*
for (let i = 0; i <10; i++) {
  if(i % 2 ===0){  
    console.log(i);
  }
}
*/

// prints backwards from 50 to 1
for (let i = 50; i > 0; i--){
  console.log (i);
}


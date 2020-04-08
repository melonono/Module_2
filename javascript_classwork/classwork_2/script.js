
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

let answer1 = prompt (" How many big oceans are there? 5, 4 or 2?");
let answer2 = prompt ("What is a tomato? a banana, a fruit or a vegteble?");
let answer3 = prompt ("How many planets are there in our solarsystem? 10, 7 or 8");
let points = 0; 

if (answer1 == "5"){
  points += 2;
}

if (answer2 == "a fruit"){
  points += 2
}
if (answer2 == "8"){
  points += 2;
}

console.log(`You're total score is ${points} points!`);

//Request a number from a user, and define whether it is positive, negative, or zero. Display a resulting message as an alert.

let number2 = +prompt('Type whatever number you like');

if (number2 > 0) {
  alert('This number is positive');
} else if (number2 < 0) {
  alert('This number is negative');
} else {
  alert('The number is zero');
}

//Request a user’s age and check whether it is realistic (0-120 y.o.). If it is realistic, display a message ‘Hi! You are # years old’, otherwise – ‘Hm… Is it even possible?

let age2 = +prompt('How old are you?');

if (age >= 0 && age >= 120) {
  alert(`Hi! You are ${age2} years old`);
} else {
  alert('Maybe you\'re the oldest person on earth?... Or you\'re bending the truth a bit?');
}




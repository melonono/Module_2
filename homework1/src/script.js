//Request a length of a side of a square from a user and display the perimeter of the square in the console.

let squareLength = parseInt(prompt("Enter a length of square:"));
let perimiterOfSquare = 4 * squareLength;
console.log("The perimiter of square is: " + perimiterOfSquare);

//Request a user’s year of birth, count their age, and display the result to the console. Store the current year as a constant.


let yearBorn = prompt('When are you born', 1988);
function calcAge(currentYear) {
    return currentYear - yearBorn;
}
const year = 2020;
console.log(calcAge(2020));


//Request a distance in kilometers between the two cities from a user, and the time they want to cover it within. Count the speed needed to be on time.

//Create a simple currency converter. A user types in USD and the program converts them to EUR. The exchange rate should be stored as a constant. Then display the result in the console.

//A user types in the values of a and b for the formula a * x + b = 0 . The program has to calculate the x and display it in the console.





//Request current time from a user in format HH:mm (HH is hour in a day from 00 to 23, mm are minutes in hour) and display how many hours and minutes are left until tomorrow.

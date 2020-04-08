//1. SWITCH - Request a number of a month from a user. Print the name of the month to the webpage as a paragraph using document.write().

let monthNumber = +prompt('Type a number of a month');

switch (monthNumber) {
  case 1:
    document.write('<p>January</p>');
    break;
  case 2:
    document.write('<p>February</p>');
    break;
  case 3:
    document.write('<p>March</p>');
    break;
  case 4:
    document.write('<p>April</p>');
    break;
  case 5:
    document.write('<p>May</p>');
    break;
  case 6:
    document.write('<p>June</p>');
    break;
  case 7:
    document.write('<p>July</p>');
    break;
  case 8:
    document.write('<p>August</p>');
    break;
  case 9:
    document.write('<p>September</p>');
    break;
  case 10:
    document.write('<p>October</p>');
    break;
  case 11:
    document.write('<p>November</p>');
    break;
  case 12:
    document.write('<p>December</p>');
    break;
  default:
    document.write('<p>There is only 12 month´s in a year, reoad the page and try again</p>');
    break;
}



// 2. WHILE LOOP - Request a number and an extent. Raise the number to the given power and display the result. Do not use ** or Math.pow() here.

/* I found this example but don't understand how to write it out as a while loop.

let precision = 5;
let result = 10 ** precision;
console.log(result);

*/

// 3. WHILE LOOP - Suggest a user solve 2 + 2 * 2 until he/she does it right.



// 4. USING LOOP - Count sheep. Request a non-negative integer, 3 for example, and print a string with a murmur: “1 sheep...2 sheep...3 sheep...” to the page using document.write(). If a user types a negative number in, alert an error.





//=======================EXAMPLE FROM LESSON=====================================
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
// for (let i = 50; i > 0; i--){
//   console.log (i);
// }

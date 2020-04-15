
//Write a function that accepts a string as a parameter and counts the number of vowels within the string.

// Write a function that accepts hours, minutes, and seconds and returns that time only in seconds. For example, 1 hour 25 minutes 43 seconds returns 5145 seconds.



// Write a function that accepts two arguments: a string and a character. The function has to count the number of occurrences of the specified character within the string. For example, there are 2 occurrences of a character “o” in the string “Hello world”.

function countChar (inputString, inputChar){
  let numberOfTimes = 0;
  for (let i = 0; i < inputString.length; i++){
    console.log(i);
    console.log(inputString[i]);
    
    if (inputString [i] == inputCharacter) {
      numberOfTimes++;
    }

  }

}
countChar("Counting charachters", "o");



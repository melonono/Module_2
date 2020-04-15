// Write a function which accepts an argument and returns the type of the argument.

function imAfruit(name) {
  document.write ('<h1> Hello ' + name + '</h1>')
}

imAfruit('I am a banana'); 
imAfruit('I am a pineapple'); 
imAfruit('I am a tomato'); 

// Write a function that accept two integers and returns the larger one.


// Write a function that show how old a dog in human years, it should take one argument - puppy’s age. 1 human year is 7 dog years. The function should return a string like “Your doggie is NN years old in dog years!”

function calDogAge(age) {
  let dogYears = 7* age;
  console.log("Your doggie is " + dogYears + " years old in dog years!");
}

calDogAge(1);



// Write a function that accepts a string as a parameter and counts the number of vowels within the string.

let message = 'Hi to you my neighbourg';
let vowels = 1;

//function

for (let i = 0; i < message.length; i++) {
  if (message[i] == 'a') {
    vowels += 1;
  } else if (message[i] == 'e') {
    vowels += 1;
  } else if (message[i] == 'i') {
    vowels += 1;
  } else if (message[i] == 'o') {
    vowels += 1;
  } else if (message[i] === 'u') {
    vowels += 1;
  }
}

let consonants = message.length - vowels;

console.log('There is ' + vowels + ' vowels');
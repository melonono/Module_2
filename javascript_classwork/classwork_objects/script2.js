// Using for-loop, write all names of the changed array to the webpage using document.write() .

let people = ["Alex", "Mary", "Devon", "James"];

people.shift();
people.unshift('Melody');
people.push('Jane');
console.log(people);

document.write(`<p>${people} </p>`);


//Write a function that accepts an array and returns a reversed version of it. *note to self, is not an array yet. Look up and ask Maryna.  --- use sipmle for loop and say i = the lengh of the array -1. Change condition. look at video. 

function reverseIt(object){
  let result = {};

for (const key in object) {
    result[object [key]] = key;
  }
  return result;
}

let reversedThings = {
  name: 'Sersi',
  egolevel: 'I am Eternal',
  intelligence: 'currently evaluating',
};

console.log(reverseIt(reversedThings));

//Write a script that displays the reading status of the following books (either to the webpage or to the console).

let myLibrary = [ 
  {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    isRead: true
  },
  {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    isRead: true
  },
  {
    author: 'Suzanne Collins',
    title:  'Mockingjay: The Final Book of The Hunger Games', 
    isRead: false
}];


//console.log(`I have read that ${myLibrary.author} book allready`);

/*Example output:
I already read ‘The Road Ahead’ by Bill Gates
I already read ‘Walter Isaacson’ by Steve Jobs
I still need to read ‘Mockingjay: The Final Book of The Hunger Games’ by Suzanne Collins*/





//Lesson go though ARRAYS - Maryana


// let colors = ['red', 'yellow', 'bule', 'green'];
// console.log(colors);
// console.log(colors.length);
// console.log(colors[colors.lenght -1]);

// for (let i = 0; i < colors.length; i++) {
//   console.log(colors.length[i])
// }

// //this shows only the items
// for (let item of colors) {
//   console.log(item);
// } 

//modify arrays, functions can do it for us. 

// let colors = ['red', 'yellow', 'bule', 'green'];

// //push - adds to the end of the array.
// colors.push(100);
// //pop -  removes an item from the end of an array. 
// colors.pop();
// console.log(colors);

// //shift - removes an item from the beginning of an array
// colors.shift();
// console.log(colors);
// //unshit adds an item to the beginning of an array
// colors.unshift(200);
// console.log(colors);

// let numbers = [50, 34, 21, 5, 7];

// console.log(numbers.sort());

// //get a string not an array
//   let colors = ['red', 'yellow', 'bule', 'green'];

//   console.log(colors.join('---'));

// //split an array 
//   let message = 'Hello world cat';
//   console.log(message.split(' '));

// // reverse our array

// console.log(message.split(' ').reverse());

// // join our array
// console.log(message.split(' ').reverse().join());
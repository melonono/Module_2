// We will start with the array functions exercises :sparkles: You will have 40 minutes :wink:
// 1. Suppose we have an array of people.
// let people = ["Mary", "Greg", "Jane", "James"];
// Using the splice() function, remove “Jane” from the array and add “Elizabeth” and “Artie”.  Then the array should look like this [“Mary”, “Greg”, “Elizabeth”, “Artie”, “James”].

let people = ["Mary", "Greg", "Jane", "James"];
people.splice(people.indexOf('Jane'), 1, 'Elizabeth','Artie');

console.log(people);

// 2. Suppose we have an array of objects.
// Using forEach() function, print each element to the webpage in the following way:
// 1. Book ‘The Road Ahead’ is written by ‘Bill Gates’
// 2. Book ‘Walter Isaacson’ is written by ‘Steve Jobs’
books = [
  {
    author: 'Bill Gates',
    title: 'The Road Ahead',
  },
  {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
  }
];

books.forEach(function(book, i){
    
  document.write(`<p>Book ${i + 1} ${book.title} is written by ${book.author}</p>`)
});




// 3. Suppose we have an array of numbers.
// let numbers = [112, -20, 52, 0, -1, 944];
// Using filter() function, create a new array consisting only positive numbers.

let numbers = [112, -20, 52, 0, -1, 944];

let numbers2 = numbers.filter(function(number){
  return number > 0;
});
console.log(numbers2);



// 4. Suppose we have an array of objects.

let keyValueArray = [
  {
    key: 'name',
    value: 'James'
  },
  {
    key: 'age',
    value: 27
  },
  {
    key: 'surname',
    value: 'Doe'
  }
];

let reformattedArray = keyValueArray.map(function(item, index, array){
  let newObject = {};
  newObject [item.key] = item.value;
  return newObject;
});

console.log(reformattedArray);


// Using map() function, create a new array consisting reformatted objects
// like this:
// [
//   {
//     name: 'James'
//   },
//   {
//     age: 27
//   },
//   {
//     surname: 'Doe'
//   }
// ]
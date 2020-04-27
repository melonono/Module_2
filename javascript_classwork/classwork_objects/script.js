//OBJECTS

//Write a program that lists the properties of an object. For example, for the object
let student = {
  name: "Jane Rayy",
  class: "VI",
  age: 12
};

for (let key in student) {
  let outputString = key+ " : " +student[key]; 
  console.log(outputString);
  //console.log(`${key} : ${student[key]}`); 
} 

//Create an object that holds information of your favorite recipe.Display the recipe information on the webpage. Use heading for the title. Use paragraphs for other info. 

let favoriteRecipe = {
  title: ['chocolate cake'],
  servings: 4,
  ingredients: ['2 eggs, 3 dl flour, 150 gram butter, 1,5 dl cacao '],
}

document.write(`<h1>${favoriteRecipe.title}</h1>`);
document.write(`<p>${favoriteRecipe.servings}</p>`);
document.write(`<p>${favoriteRecipe.ingridients}</p>`);

//Write a function to get a copy of the object where the keys have become the values and the values become the keys. For example, for the object

function invertThem(object){
  let result = {};

  for (const key in object) {
    result[object [key]] = key;
  }
  return result;
}

let person = {
  name: 'Alex',
  lastname: 'Doe',
  age: 25,
};

console.log(invertThem(person));

//The resulting object will be
// {
//    Alex: 'name',
//    Doe: 'lastname',
//    '25': 'age'
// };
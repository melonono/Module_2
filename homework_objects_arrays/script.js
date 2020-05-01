// Create a “groceries list” array. Each element of the array is an object that contains the name of a product, an amount needed and a property saying whether it is bought or not. Write a few functions for working with this array: 1) Function for displaying the entire list; 2) Function for adding a purchase to the list. Note that if a product already exists in the array, the amount needs to be increased in the existing purchase, not in a new one; 3) Function for purchasing a product. The function accepts the name of a product and marks it as bought.

//1.1
let groceriesList = [{
  name: 'banana',
  amount: 3,
  isbought: false,
}, 
{
  name: 'pinapple',
  amount: 5,
  isbought: false,
}, 
{
name: 'icecream',
amount: 2,
isbought: false,
}, 
{
  name: 'apple',
  amount: 2,
  isbought: false,
  }, 

  
];
//1.1

const list = arr => {
  const theList = arr.map(i => i.name);
  console.log(theList);
  return theList;
};

list(groceriesList);

//1.2

  function addItemToTheList (item, quantity, status){
    groceriesList.push({
      name: item, 
      amount: quantity, 
      isbought: status,
    });
  }
  addItemToTheList('egg', 10, false);

// //1. check if the item already exists
// //2. find the index of the item
// //3. update the amount

  const add = (item, quantity, status = false) => {
    if (list(groceriesList).includes(item)) {
      const idx = groceriesList.findIndex(el => el.name === item);
      return (groceriesList[idx].amount = groceriesList[idx].amount + quant);
    } else {
      return groceriesList.push({ name: item, amount: quantity, status });
    }
  };

  add('fish', 2);
  console.log(groceriesList);


const checkItem = (name) => { 
  return (list(groceriesList).includes(name))

};

console.log(checkItem('apple'));
console.log(checkItem.findIndex(groceriesList));


// Create an array of classrooms. A classroom object consists of a name, a number of seats (10 to 20) and the faculty it is meant for. Write a few functions for working with it: 1) Display all the classrooms; 2) Display all the classrooms for a given faculty; 3) Display only the classrooms that would fit a given group. A group object contains a name, the number of students, and the faculty name.
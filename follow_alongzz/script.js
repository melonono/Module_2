//series of statements you can use as many times as you like. 
// name of function has to tell you what it does.
// function sayHello() {
//   document.write ('<h1> Hello world </h1>') //tell the function what to do
// }
// sayHello(); //this calls the function and allows to show. 

// function sayHello(name) { //name = a perimiter
//   // document.write(`<h1> Hello $(name) </h1>`)back ticks is a template string! This will show the same as the below function
//   document.write ('<h1> Hello ' + name + '</h1>') //tell the function what to do
// }
// sayHello('Alice'); //this is called argument
// sayHello('Jane'); //this is called argument
// sayHello('Alex'); //this is called argument

//===============================//
// for loop that itrirates. 

//pass 10  -> 1 +2 + 3 
// will call the function number
//shortcut from sum = + 1;
// function sum(number) { 
//   for (let i = 1; i<= number; i++){
//     sum += i; 
//   }
//  return sum; 
//  console.log (sum); //note to seld. doesn't work as marinas does. Done something wrong here.
// }


// function sum(number) { 
//   for (let i = 1; i<= number; i++){
//     sum += i; 
//   }
//  return sum; 

// }
// let someSummation = sum(10);
// console.log (someSummation);

//---------PART 2 ------------//

// function add() {
//  console.log(arguments[0]);
// }
// let addResult = add(1, 5, 3); //9

function add() {
  let result =0;

  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i]; 
  }

  return result;
 }

 let addResult = add(2, 1); //3
 console.log(addResult)
 

 function greeting(name) {
   return 'hello, ' +name;

 }

 let message = greeting('jane, 123');
 console.log(message);
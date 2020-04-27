// Create a constructor function called Video. The function should accept arguments of title (a string), uploader (a string, the person who uploaded it), and seconds (a number, the duration), and it should save them as properties of the object. 

//Create a method of the Video constructor called watch() which should log a string to the console like “You watched all 1800 seconds of Walking with Dinosaurs!” Create a new object using the Video constructor and call the watch() method of it.

// function Video(title,uploader, seconds){
//   this.title = title;
//   this.uploader = uploader;
//   this.seconds = seconds;
//   this.watch = function(){
//     console.log([`You watched all ${this.seconds}seconds ${this.title}`])
//   };
// }

// let movie = new Video('Bamse', 'Melody', 3600);

// movie.watch();

// Suppose we have a student object:
// let student = {
//   name: 'Alex',
//   lastname: 'Wood'
// };
// Write a function called displayStudentInfo which accepts an object and returns the string “Your full name is NAME LASTNAME”. Use object destructuring to create “name” and “lastname” variables.

let student = {
  name: "Alex",
  lastname: "Wood",
};
function displayStudentInfo(student) {
  let { name, lastname } = student;
  let result = `Your full namne is ${name} ${lastname}`;
  return result;
}
console.log(displayStudentInfo(student));
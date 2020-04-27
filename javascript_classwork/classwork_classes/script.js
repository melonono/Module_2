class Person {
  constructor(){
    this.name = name;
    this.age = age;
  }
  greet(){
    console.log(this.name);
  }

  addHobby(hobby){
    this.interests.push(hobby);
  }
  
}

let person = new Person('Jane', 38['fotball', 'drawing']);

class Student extends Person{
  constructor(name, age, interests, faculty, lastname){
    super(name, age, interests); //Super keyword calls constructor of a parent class
    this.faculty = faculty;
    this.lastname = lastname;
  }
  get fullname(){
  return`${this.name} ${this.lastname}`;
  }
  greet(){
    super.greet(); //with super we can call methods 
    console.log(`Hello my name is ${this.name}, I'm ${this.age} years old`);
  }

}

let student = new Student('Alex', 23 ['rugby' , 'drawing'])
student.greet();
console.log(student.fullname);
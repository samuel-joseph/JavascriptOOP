// const myBook = document.querySelector("h1");
// const myWriter = document.querySelector("p");
// myBook.textContent = object.Book;
// myWriter.textContent = object.Writer;

//function literal
var object = {
  book: "The Principles of Object-Oriented Javascript",
  writer: "Nicholas C. Zakas",
};

console.log(object);

//constructor
var object1 = new Object();
object1.book = "Game of Thrones";
object1.writer = "George R. R. Martin";
object.BookType = "Hard Bound";

console.log(object1);

//property access

//dot notation
var arr = [];
arr.push(123);

//bracket notation
var array = [];
var method;
method = "push";
array[method]([123], [1]);
method = "pop";
array[method]();

//Identifying reference type using instanceof
// console.log(array instanceof Array);

//Primitive wrapper types

// var name = new String("Nayomi");

// console.log(typeof name);

function sum() {
  let result = 0;
  let i = 0;
  let len = arguments.length;

  while (i < len) {
    result += arguments[i];
    i++;
  }
  return result;
}

// console.log(sum(2, 4, 1, 4, 6, 7, 100));

function sayNameAll() {
  console.log(this.name);
}

var person1 = {
  name: "Bryant",
  sayName: sayNameAll,
};

var person2 = {
  name: "Oden",
  sayName: sayNameAll,
};

var name = "Mark";

// person1.sayName();
// person2.sayName();
// sayNameAll();

var arrayObject = new Array();

function newUser(email, code, ref) {
  var user = {
    email,
    code,
    ref,
  };
  arrayObject.push(user);
}

newUser("test@google.com", "xxx", 0);
newUser("test1@google.com", "xxy", 1);
newUser("test2@google.com", "xyz", 2);

// console.log(arrayObject);

//Can create javascript objects with  object constructors or object literals

const person3 = new Object();
person3.name = "Nichole";

const person4 = {
  name: "Nicholas",
};

//To check the existence of a property in an object

console.log("name" in person4);

//to delete a property in an object

delete person4.name;

console.log("name" in person4);
console.log(person4.hasOwnProperty("name"));

//Object.defineProperty(object, property, {values})
var car = {};

Object.defineProperty(car, "brand", {
  value: "Toyota",
  enumerable: true,
  configurable: true,
  writable: true,
});

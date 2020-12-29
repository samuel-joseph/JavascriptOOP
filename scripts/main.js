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

console.log(arr);
//bracket notation
var array = [];
var method;
method = "push";
array[method]([123], [1]);
method = "pop";
array[method]();
console.log(array);

//Identifying reference type using instanceof
console.log(array instanceof Array);

//Primitive wrapper types

var name = new String("Nayomi");

console.log(typeof name);

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

console.log(sum(2, 4, 1, 4, 6, 7, 100));

object = null;

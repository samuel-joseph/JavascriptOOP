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

var array = [];
var method;
method = "push";
array[method]([123], [1]);
method = "pop";
array[method]();
console.log(array);

object = null;

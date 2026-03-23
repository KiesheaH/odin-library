"use strict";

/* DOM ELEMENTS */
const main = document.querySelector(".main");
const addButton = document.querySelector(".add");

addButton.addEventListener("click", function () {
  const bookElement = document.createElement("div");
  bookElement.classList.add("book");
  main.appendChild(bookElement);
});

/* OBJECT CONSTRUCTOR */
function Book(title, author, format, pages, publishing) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.title = title;
  this.author = author;
  this.format = format;
  this.pages = pages;
  this.publishing = publishing;
  // this.read = read;
  // this.info = function () {
  //   console.log(
  //     `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`,
  //   );
  // };
}

/* ARRAY POPULATION */
function addBookToLibrary(book) {
  library.push(book);
}

// const perfectMurder = new Book(
//   "Happy Gilmore",
//   "Teresa Adams",
//   500,
//   "not read",
// );

// perfectMurder.info();

// console.log(`${Object.getPrototypeOf(perfectMurder) === Book.prototype}`);

"use strict";

function Book(title, author, pages, read) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    console.log(
      `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`,
    );
  };
}

const perfectMurder = new Book(
  "Happy Gilmore",
  "Teresa Adams",
  500,
  "not read",
);

perfectMurder.info();

console.log(`${Object.getPrototypeOf(perfectMurder) === Book.prototype}`);

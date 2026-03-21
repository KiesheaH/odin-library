"use strict";

/* DOM ELEMENTS */
const overlay = document.querySelector(".overlay");
const form = document.querySelector(".form");
const readStatus = document.querySelector(".select-box");
const book = document.querySelector(".book");

/* BUTTONS */
const addButton = document.querySelector(".add");
const closeButton = document.querySelector(".close");
const submitButton = document.querySelector(".submit");

/* EVENT LISTENERS */
addButton.addEventListener("click", function () {
  overlay.classList.add("active");
  form.classList.add("active");
});

closeButton.addEventListener("click", function () {
  overlay.classList.remove("active");
  form.classList.remove("active");
});

/* GLOBAL ELEMENTS */
const books = [];

/* OBJECT CONSTRUCTOR */
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

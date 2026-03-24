"use strict";

/* USER INTERFACE */
const main = document.querySelector(".main");
const addButton = document.querySelector(".add");
const library = [];

/* MODAL */
const overlay = document.querySelector(".overlay");

const form = document.querySelector(".form");
const bookTitle = document.getElementById("book-title");
const bookAuthor = document.getElementById("book-author");
const bookFormat = document.getElementById("book-format");
const bookPages = document.getElementById("page-count");
const bookPublishing = document.getElementById("publishing-date");

const closeButton = document.querySelector(".close");
const submitButton = document.querySelector(".btn-submit");

/* EVENT LISTENERS */
addButton.addEventListener("click", function () {
  form.classList.add("active");
  overlay.classList.add("active");
});

closeButton.addEventListener("click", function () {
  form.classList.remove("active");
  overlay.classList.remove("active");
});

submitButton.addEventListener("click", function (e) {
  // prevents default behavior
  e.preventDefault();

  //  creates book object
  const book = new Book(
    bookTitle.value,
    bookAuthor.value,
    bookFormat.value,
    bookPages.value,
    bookPublishing.value,
  );

  addBookToLibrary(book);

  // console.log(book);
  // console.log(addBookToLibrary);
  // creates book element
  const bookElement = document.createElement("div");
  bookElement.classList.add("book");

  bookElement.innerHTML = `<div class="book-info">
          <h2 class="title">Title</h2>
          <div class="author">
            <p>by <span class="author-name">&nbsp;</span></p>
          </div>
          <p class="pages">Pages: <span class="count">&nbsp;</span></p>
        </div>

        <!-- PUBLISHING -->
        <div class="publishing">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="book-svg"
          >
            <path
              d="M23 5v13.883l-1 .117v-16c-3.895.119-7.505.762-10.002 2.316-2.496-1.554-6.102-2.197-9.998-2.316v16l-1-.117v-13.883h-1v15h9.057c1.479 0 1.641 1 2.941 1 1.304 0 1.461-1 2.942-1h9.06v-15h-1zm-12 13.645c-1.946-.772-4.137-1.269-7-1.484v-12.051c2.352.197 4.996.675 7 1.922v11.613zm9-1.484c-2.863.215-5.054.712-7 1.484v-11.613c2.004-1.247 4.648-1.725 7-1.922v12.051z"
            />
          </svg>
          <p>
            <span class="book-type">Book</span>,
            <span class="year">2026</span>
          </p>
        </div>

        <!-- RETURNED INFO -->
        <div class="return">
          <p>Returned on: <span class="date">&nbsp;</span></p>
          <div class="select-container">
            <select name="status" class="select-box">
              <option value="not-started" selected>Not Started</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        </div>`;

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
function addBookToLibrary(book) {}

// const perfectMurder = new Book(
//   "Happy Gilmore",
//   "Teresa Adams",
//   500,
//   "not read",
// );

// perfectMurder.info();

// console.log(`${Object.getPrototypeOf(perfectMurder) === Book.prototype}`);

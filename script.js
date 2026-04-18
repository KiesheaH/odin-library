"use strict";

/* USER INTERFACE */
const main = document.querySelector(".main");
const date = document.querySelector(".date");
const library = [];

const addButton = document.querySelector(".add");
date.textContent = new Date().getFullYear();

/* MODAL */
const overlay = document.querySelector(".overlay");

const form = document.querySelector(".form");
const formTitle = document.getElementById("book-title");
const formAuthor = document.getElementById("book-author");
const formFormat = document.getElementById("book-format");
const formPages = document.getElementById("page-count");
const formPublishing = document.getElementById("publishing-date");

/* BUTTONS */
const closeButton = document.querySelector(".close");
const submitButton = document.querySelector(".btn-submit");

/* BOOK CARDS */

/* EVENT LISTENERS */
addButton.addEventListener("click", function () {
  form.classList.add("active");
  overlay.classList.add("active");
});

closeButton.addEventListener("click", function () {
  closeModal();
});

submitButton.addEventListener("click", function (e) {
  // prevents default behavior
  e.preventDefault();

  // create a new book object based on the information entered
  let book = new Book(
    formTitle.value,
    formAuthor.value,
    formFormat.value,
    formPages.value,
    formPublishing.value,
  );

  book.id = crypto.randomUUID();

  // pushes object to library resets user interface
  addBookToLibrary(book);
  closeModal();
  clearForm();

  // create book element
  const bookElement = document.createElement("div");
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

        <!-- DELETE BUTTON -->
        <button class="btn-delete" id="">Delete</button>

        <!-- RETURNED INFO -->
        <div class="return">
          <p>Returned on: <span class="date">&nbsp;</span></p>
          <div class="select-container">
            <select name="status" id="select-box">
              <option value="not-started" selected>Not Started</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        </div>`;

  // append node to the DOM
  main.appendChild(bookElement);

  // add bookElement to the library interface
  bookElement.classList.add("book");

  // update the newly created book card with relevant information
  const lastBook = library[library.length - 1];
  bookElement.querySelector(".title").textContent = lastBook.title;
  bookElement.querySelector(".author-name").textContent = lastBook.author;
  bookElement.querySelector(".count").textContent = lastBook.pages;
  bookElement.querySelector(".year").textContent = lastBook.publishing;

  // removes card when selected
  const deleteButton = bookElement.querySelector(".btn-delete");
  deleteButton.setAttribute("id", lastBook.id);

  deleteButton.addEventListener("click", function () {
    const index = library.findIndex((obj) => obj.id === deleteButton.id);
    library.splice(index, 1);
    main.removeChild(bookElement);
  });
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
}

/* CLOSE MODAL */
function closeModal() {
  form.classList.remove("active");
  overlay.classList.remove("active");
}

/* LIBRARY UPDATES */
function addBookToLibrary(obj) {
  library.push(obj);
}

/* CLEARS FORM VALUES */
function clearForm() {
  formTitle.value = "";
  formAuthor.value = "";
  formFormat.value = "";
  formPages.value = "";
  formPublishing.value = "";
}

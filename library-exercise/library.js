const myLibrary = [
  {
    title: "test",
    author: "test",
    nPage: "test",
    read: "12",
  },
  {
    title: "test",
    author: "test",
    nPage: "test",
    read: "12",
  },
  {
    title: "test",
    author: "test",
    nPage: "test",
    read: "12",
  },
];

// gets all the elements we need
const btnCreateNewBook = document.getElementById("submit");
const btnOpenPopUpWindow = document.getElementById("add-button");
const btnClosePopUpWindow = document.getElementById("close");
const popUpWindow = document.querySelector("dialog");

popUpWindow.close();

function Book(author, title, nPage, read) {
  // the constructor...
  this.author = author;
  this.title = title;
  this.nPage = nPage;
  this.read = read;
}

// listener and function to the button to open the popup
btnOpenPopUpWindow.addEventListener("click", displayPopUp);

function displayPopUp() {
  popUpWindow.showModal();
}

// listener and function to close the popup
btnClosePopUpWindow.addEventListener("click", closePopUp);

function closePopUp() {
  popUpWindow.close();
}

// add an event listener to the button to add the book to the array
btnCreateNewBook.addEventListener("click", addBookToLibrary);

function refreshHTML() {
  location.reload();
}

// function to create the book from
// the infos that user entered in the popup form
function addBookToLibrary() {
  const myAuthor = document.getElementById("author").value;
  const myName = document.getElementById("name").value;
  const mynPage = document.getElementById("nPage").value;
  const myRead = document.getElementById("read").checked;

  const myBook = new Book(myAuthor, myName, mynPage, myRead);

  myLibrary.push(myBook);
  displayBooks();
  popUpWindow.close();
}

// displays all the books in the array
function displayBooks() {
  // create the first div uses for the grid
  const booksContainer = document.querySelector("#books-container");
  const booksGrid = document.createElement("div");
  booksGrid.classList.add("books-grid");
  booksGrid.setAttribute("id", "books-grid");
  booksContainer.appendChild(booksGrid);

  // create the structure for the books
  myLibrary.forEach((book, index) => {
    // gets the container id to append new chields
    const bookGridElement = document.querySelector("#books-grid");

    const indexGrid = document.createElement("div");
    indexGrid.setAttribute("id", "index-grid");
    bookGridElement.appendChild(indexGrid);

    // creates the title div
    const lblTitle = document.createElement("div");
    lblTitle.classList.add("label-title");
    lblTitle.textContent = "Title: " + myLibrary[index].title;
    indexGrid.appendChild(lblTitle);

    // creates the author div
    const lblAuthor = document.createElement("div");
    lblAuthor.classList.add("label-author");
    lblAuthor.textContent = "Author: " + myLibrary[index].author;
    indexGrid.appendChild(lblAuthor);

    // creates the number of page div
    const lblnPage = document.createElement("div");
    lblnPage.classList.add("label-npage");
    lblnPage.textContent = "N Page: " + myLibrary[index].nPage;
    indexGrid.appendChild(lblnPage);

    // creates the read or not div
    const lblRead = document.createElement("div");
    lblRead.classList.add("label-read");
    if (myLibrary[index].read == false) {
      lblRead.textContent = "Already read: No";
    } else {
      lblRead.textContent = "Already read: Yes";
    }
    indexGrid.appendChild(lblRead);

    // create the delete button for each book
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.setAttribute("id", "delete-button");
    deleteButton.setAttribute("data-id", index);
    deleteButton.textContent = "Delete";
    indexGrid.appendChild(deleteButton);
  });
}

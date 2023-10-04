const myLibrary = [];

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
  booksContainer.appendChild(booksGrid);

  // create the structure for the books
  myLibrary.forEach((book) => {
    console.log("Titolo: " + book.title);
    console.log("Numero pagine: " + book.nPage);
    console.log("Autore: " + book.author);
    console.log("Già letto: " + book.read);
  });
}

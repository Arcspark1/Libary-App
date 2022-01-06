let myLibary = [];
const sectionBooks = document.querySelector('#books');
const addBookButton = document.querySelector('.addBook');

let testBook = new Book('marc','me', 500)
// Book object
function Book(name, author, pages, read = false){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function(){
    return `${this.name}, ${this.author}, ${this.pages}, ${this.read}`;
}


//Function to add book to Libary Array;
function addBookToLibary(){
    let name = prompt('Name of book:');
    let author = prompt ('Author of book: ');
    let pages = prompt('How many pages?: ');
    let book = new Book(name, author, pages);
    myLibary.push(book);
}
// testing
myLibary.push(testBook);


// function generateForm(){
//     const bookForm = document.createElement('form');
//     bookForm.classList.add('bookForm');
//     bookForm.action = "";
//     const nameLabel = document.createElement('label');
//     nameLabel.htmlFor="bname";
//     nameLabel.textContent="Name of the book:";
//     const nameInput = document.createElement('input');
//     nameInput.type="text";
//     nameInput.id="bname";
//     bookForm.appendChild(nameLabel);
//     bookForm.appendChild(nameInput);
//     document.querySelector('body').appendChild(bookForm);
// }

// For loop that creates all the book cards based on myLibary
for(let i = 0; i < myLibary.length; i++) {
    const newBook = document.createElement('div');
    const bookName = document.createElement('p');
    const bookAuthor = document.createElement('p');
    const bookPages = document.createElement('p');
    bookName.textContent = `${myLibary[i].name}`
    bookAuthor.textContent = `${myLibary[i].author}`
    bookPages.textContent = `${myLibary[i].pages}`
    newBook.appendChild(bookName);
    newBook.appendChild(bookAuthor);
    newBook.appendChild(bookPages);
    newBook.classList.add('book')
    document.querySelector('#books').appendChild(newBook);
}


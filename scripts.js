let myLibary = [];
const sectionBooks = document.querySelector('#books');
const addBookButton = document.querySelector('.addBook');
const addBookForm = document.querySelector('.addBookForm');
const submitFormBtn = document.querySelector('.completeForm');

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

// Add Book Button functionality
addBookButton.addEventListener('click', () =>{
    addBookForm.classList.remove('hidden');
    addBookButton.disabled = true;
})

//Form Data
submitFormBtn.addEventListener('click', () =>{
    let bookFormData = new FormData(addBookForm);
    addBookToLibary(
        bookFormData.get('bookName'),
        bookFormData.get('bookAuthor'),
        bookFormData.get('bookPages'),
        bookFormData.get('haveRead')
    )
    addBookForm.classList.add('hidden');
    addBookButton.disabled = false;
    updateLibary();
    document.getElementById("addBookFormId").reset();
})





//Function to add book to Libary Array;
function addBookToLibary(name, author, pages, read){
    let book = new Book(name, author, pages, read);
    myLibary.push(book);
}
// testing
myLibary.push(testBook);
updateLibary();


// For loop that creates all the book cards based on myLibary
function updateLibary() {
    for (let i = myLibary.length; i <= myLibary.length; i++) {
        const newBook = document.createElement('div');
        const bookName = document.createElement('p');
        const bookAuthor = document.createElement('p');
        const bookPages = document.createElement('p');
        const bookRead = document.createElement('p');
        bookName.textContent = `Title: ${myLibary[i-1].name}`;
        bookAuthor.textContent = `Author: ${myLibary[i-1].author}`;
        bookPages.textContent = `Pages: ${myLibary[i-1].pages}`;
        bookRead.textContent = `Read: ${myLibary[i-1].read}`;
        newBook.appendChild(bookName);
        newBook.appendChild(bookAuthor);
        newBook.appendChild(bookPages);
        newBook.appendChild(bookRead);
        newBook.classList.add('book')
        document.querySelector('#books').appendChild(newBook);
    }
}

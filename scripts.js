let myLibary = [];
const sectionBooks = document.querySelector('#books');

let testBook = new Book('marc','me', 500)

function Book(name, author, pages, read = false){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function(){
    return `${this.name}, ${this.author}, ${this.pages}, ${this.read}`;
}
//Function to add book to Libary;
function addBookToLibary(){
    let name = prompt('Name of book:');
    let author = prompt ('Author of book: ');
    let pages = prompt('How many pages?: ');
    let book = new Book(name, author, pages);
    myLibary.push(book);
}
myLibary.push(testBook);
addBookToLibary();
console.table(myLibary);
console.log(myLibary[0].name);
console.log(myLibary[0].info());

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
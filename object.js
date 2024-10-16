1.
const user = {
    name: "Tom",
    age: 32,
    email: "tome@example.com",

    greet(){
        return `Hi, my name is ${this.name},I am ${this.age} years old.`;
    },

 updateEmail(newEmail) {
        this.email = newEmail;
        return `Email updated to: ${this.email}`;
    }

}

console.log(user.greet());
console.log(user.updateEmail("tome@example.com"));


2.
 const workers = [
    {name: "Alice", age: 25},
    {name: "Bob", age: 30},
    {name: "Charlie", age: 22},
    {name:"Max", age: 47}

];

function filterUsersByAge(minAge){
    return workers.filter( worker => worker.age >= minAge);

}

console.log(filterUsersByAge( 24));

3.

const collection = [
    { title: "The Great Gatsby", pages: 180, pagesRead: 100 },
    { title: "1984", pages: 328, pagesRead: 50 },
    { title: "To Kill a Mockingbird", pages: 281, pagesRead: 281 }
  ];

  function countTotalPagesRead() {
    return collection.reduce((acc, book) => acc + book.pagesRead, 0);
  }

  console.log(countTotalPagesRead());//431

  4.

  const library = [];


function addNewBook(title, author, pages, isRead) {

    const newBook = {
        title: title,
        author: author,
        pages: pages,
        isRead: isRead
    };

    library.push(newBook);
}
function listBooks() {
    if(library.length === 0){
        console.log("No books");
        return;
        }
    library.forEach(book =>{
        console.log(`Title: ${book.title}, Author: ${book.author}, Pages: ${book.pages}, Read: ${book.isRead ? "Yes" : "No"}`);

    } );
}

 addNewBook("The Great Gatsby", "F. Scott Fitzgerald", 180,true);
 addNewBook("1984", "George Orwell", 328,false);
 listBooks(); // Title: example, Author: example, Pages: example, Read: true/false || yes/no

 5.


const librarySystem = {
    books: [],

    addNewBook(book){
        this.books.push(book);
    },
    
    listBooks(){
        if(this.books.length === 0){
            console.log("No books");
            return;
        }

        this.books.forEach(book =>{
            console.log(`Title: ${book.title}, Author: ${book.author}, Pages: ${book.pages}, Read: ${book.isRead ? "Yes" : "No"}`);
        });

},
  getBookById(bookId){
    return this.books.find(book => book.id === bookId);
  },

  updateBook(bookId, updateBook){
    const bookIndex = this.books.findIndex(book => book.id === bookId);
    if (bookIndex !== -1) {
        updateBook.id = bookId;  
        this.books[bookIndex] = updateBook;
        return updateBook;
    }
     return undefined;
  },

  deleteBook(bookId){
    const bookIndex = this.books.findIndex(book => book.id === bookId);
    if (bookIndex !== -1) {
        this.books.splice(bookIndex, 1);
        return true;
  }

    return false;
},

getBooksByAvailableStatus(status){
    return this.books.filter(book => book.isAvailable === status);

}
};





const book1 = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
  genre: "novel",
  isAvailable: true
};

const book2 = {
    title: "1984",
    author: "George Orwell",
    year: 1949,
    genre: "melodrama",
    isAvailable: false,    
};

librarySystem.addNewBook(book1);
librarySystem.addNewBook(book2);

librarySystem.listBooks();

console.log("Get book by ID:", librarySystem.getBookById(0));

const updateBook = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    genre: "novel",
    isAvailable: true
  };

console.log("Updated book:",librarySystem.updateBook(0, updateBook)); 

librarySystem.listBooks();

console.log("Book deleted:",librarySystem.deleteBook(1));
librarySystem.listBooks();

console.log(librarySystem.getBooksByAvailableStatus(true));






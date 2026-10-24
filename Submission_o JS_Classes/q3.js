
class Book {
    constructor(title, author, ISBN, isIssued = false) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = isIssued;
    }

    // Issue a book if it is available
    issueBook() {
        if (this.isIssued) {
            console.log(`"${this.title}" is already issued.`);
        } else {
            this.isIssued = true;
            console.log(`"${this.title}" has been issued successfully.`);
        }
    }

    // Return an issued book
    returnBook() {
        if (!this.isIssued) {
            console.log(`"${this.title}" is already available.`);
        } else {
            this.isIssued = false;
            console.log(`"${this.title}" has been returned successfully.`);
        }
    }
}

// Create book objects
const book1 = new Book("The Alchemist", "Paulo Coelho", "101");
const book2 = new Book("Wings of Fire", "A. P. J. Abdul Kalam", "102");
const book3 = new Book("Atomic Habits", "James Clear", "103", true);
const book4 = new Book("Rich Dad Poor Dad", "Robert Kiyosaki", "104");

// Store books in an array
const books = [book1, book2, book3, book4];

// Display all available books
function displayAvailableBooks() {
    const availableBooks = books.filter(book => !book.isIssued);

    console.log("\nAvailable Books:");

    if (availableBooks.length === 0) {
        console.log("No books are currently available.");
    } else {
        availableBooks.forEach(book => {
            console.log(
                `Title: ${book.title}, Author: ${book.author}, ISBN: ${book.ISBN}`
            );
        });
    }
}

// Issue a book by searching its ISBN
function issueBookByISBN(isbn) {
    const book = books.find(book => book.ISBN === isbn);

    if (book) {
        book.issueBook();
    } else {
        console.log("Book not found. Please check the ISBN.");
    }
}

// Display available books before issuing
displayAvailableBooks();

// Issue a book using its ISBN
issueBookByISBN("102");

// Display available books after issuing
displayAvailableBooks();

// Return the book using its ISBN
const bookToReturn = books.find(book => book.ISBN === "102");

if (bookToReturn) {
    bookToReturn.returnBook();
}

// Display available books after returning
displayAvailableBooks();

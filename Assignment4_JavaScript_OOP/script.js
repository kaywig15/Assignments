class Book {
  constructor(title, author, genre, year) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.year = year;
  }
  displayDetails() {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
    console.log(`Genre: ${this.genre}`);
    console.log(`Year: ${this.year}`);
  }

  getSummary() {
    return `Title: ${this.title}, Author: ${this.author}, Genre: ${this.genre}, Year: ${this.year}`;
  }
}

const book1 = new Book(
  "The Demon of Unrest",
  "Erik Larson",
  "Nonfiction",
  "2024"
);
const book2 = new Book(
  "Brave New World",
  "Aldous Huxley",
  "Science Fiction",
  "1932"
);
const book3 = new Book(
  "Nineteen Eighty-Four",
  "George Orwell",
  "Dystopian",
  "1949"
);

const books = [book1, book2, book3];

books.forEach((book) => {
  console.log(book.getSummary());
});

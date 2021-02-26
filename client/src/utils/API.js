import axios from "axios";

export default {
  // Gets all books
  searchBooks: function(title) {
    console.log("in getBooks, title is:", title)
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=title:${title}`);
  },
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books/");
  },
  // Deletes the book with the given id
  deleteBook: function(_id) {
    return axios.delete("/api/books/" + _id);
  },
  // Saves a book to the database
  saveBook: function(book) {
    return axios.post("/api/books", book);
  }
};

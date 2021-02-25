import axios from "axios";

export default {
  // Gets all books
  searchBooks: function(title) {
    console.log("in getBooks, title is:", title)
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=title:${title}`);
  },
  // Gets all books
  // getBooks: function() {
  //   return axios.get("/api/books");
  // },
  // Deletes the book with the given id
  deleteBook: function(uuid) {
    return axios.delete("/api/books/:" + uuid);
  },
  // Saves a book to the database
  saveBook: function(book) {
    return axios.post("/api/books", book);
  }
};

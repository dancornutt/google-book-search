const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true }, //volumeInfo.title
  authors: { type: Array, default: [] }, //volumeInfo.authors
  description: String, //serarchInfo.testSnippet
  image: String, //volumeInfo.imageLinks.thumbnail
  link: String, //volumeInfo.infoLink
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;

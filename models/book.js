const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  uuid: { type: String, required: true },
  title: { type: String, required: true },
  authors: { type: Array, default: [] },
  description: String,
  image: String,
  link: String,
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;

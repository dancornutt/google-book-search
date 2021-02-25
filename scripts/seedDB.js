const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

const bookSeed = [
  {
    title: "Hello World",
    authors: ["admin"],
    link: "http://books.google.com/books?id=TTlhCwAAQBAJ&dq=title:computer+science&hl=&source=gbs_api",
    uuid: "2",
    image: "http://books.google.com/books/content?id=TTlhCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    description:
      "Welcome to your first post! To create posts create a title and body. Don't forget to include your screen name!",
    date: new Date(Date.now())
  },
  {
    title: "The Second Post",
    authors: ["admin"],
    link: "http://books.google.com/books?id=TTlhCwAAQBAJ&dq=title:computer+science&hl=&source=gbs_api",
    uuid: "1",
    image: "http://books.google.com/books/content?id=TTlhCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: new Date(Date.now())
  },
  {
    title: "Another One",
    authors: ["admin"],
    image: "http://books.google.com/books/content?id=TTlhCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link: "http://books.google.com/books?id=TTlhCwAAQBAJ&dq=title:computer+science&hl=&source=gbs_api",
    uuid: "3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: new Date(Date.now())
  }
];

db.Post.remove({})
  .then(() => db.Post.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

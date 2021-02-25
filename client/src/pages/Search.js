import React, { useState, useEffect } from "react";
import SaveBtn from "../components/SaveBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function Search() {
// Setting our component's initial state
const [books, setBooks] = useState([])
const [formObject, setFormObject] = useState({})

// Load all books and store them with setBooks
// useEffect(() => {
//   loadBooks()
// }, [formObject.title])

// searches all books and sets them to books
function loadBooks(title) {
  // API.getBooks(title)
  //   .then(res => {
  //     console.log("Books searched from google", res);
  //     setBooks(res.data) 
  //   }

  //   )
  //   .catch(err => console.log(err));
};

// Saves a book from the google list with a given id, then reloads books from the db
function saveBook(uuid) {

    let newbook = books.find(book => book.uuid === uuid);
    console.log("saving book", newbook);
    API.saveBook(newbook)
      // .then(res => loadBooks())
      .catch(err => console.log(err));
  }

// Handles updating component state when the user types into the input field
function handleInputChange(event) {
  const { name, value } = event.target;
  setFormObject({...formObject, [name]: value})
};

// When the form is submitted, use the API.saveBook method to save the book data
// Then reload books from the database
function handleFormSubmit(event) {
  event.preventDefault();
  if (formObject.title) {
    API.searchBooks(formObject.title)
      .then(res => {
        console.log("search:", res.data.items)
        let search = [];
        res.data.items.forEach(item => {
          search.push({
            uuid: item.id,
            title: item.volumeInfo.title,
            authors: item.volumeInfo.authors,
            description: item.searchInfo.testSnippet,
            image: item.volumeInfo.imageLinks.thumbnail,
            link: item.volumeInfo.infoLink
          })
        });
        setBooks(search)
      })
      .catch(err => console.log(err));
  }
};

  return (
    <Container fluid>
      <Row>
          <Jumbotron>
            <h1>Search Google Books!</h1>
            <h4>Seach for and Save Books of Interest</h4>
          </Jumbotron>
          <form>
            <Input
              onChange={handleInputChange}
              name="title"
              placeholder="Title (required)"
            />
            <FormBtn
              disabled={!formObject.title}
              onClick={handleFormSubmit}
            >
              Search for Books!
            </FormBtn>
            {books.length ? (
            <List>
                {books.map(book => (
                <ListItem key={book.uuid}>
                    <strong>
                        {book.title} by {book.authors}
                    </strong>
                    <SaveBtn onClick={() => saveBook(book.uuid)} />
              
                </ListItem>
                ))}
            </List>
            ) : (
            <h3>No Results to Display</h3>
            )}
          </form>
      </Row>
    </Container>
  );
}

export default Search;

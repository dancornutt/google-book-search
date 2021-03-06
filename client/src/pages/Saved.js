import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

function Saved() {
    // Setting our component's initial state
    const [books, setBooks] = useState([])
    // const [formObject, setFormObject] = useState({})

    // Load all books and store them with setBooks
    useEffect(() => {
    loadBooks()
    }, [])

    // Loads all books and sets them to books
    function loadBooks() {
    API.getBooks()
        .then(res => {
          console.log("from load books res: ". res)
          setBooks(res.data)
        }

        )
        .catch(err => console.log(err));
    };

    // Deletes a book from the database with a given id, then reloads books from the db
    function deleteBook(_id) {
    API.deleteBook(_id)
        .then(res => loadBooks())
        .catch(err => console.log(err));
    }

  return (
    <Container fluid>
      <Row>
        <Jumbotron>
        <h1>My Saved Books</h1>
        </Jumbotron>
        {books.length ? (
        <List>
            {books.map(book => (
            <ListItem key={book._id}>
                <a target="_blank" href={book.link}>
                  <strong>
                      {book.title} by {book.authors}
                  </strong>
                </a>
              <DeleteBtn onClick={() => deleteBook(book._id)} />
            </ListItem>
            ))}
        </List>
        ) : (
        <h3>No Results to Display</h3>
        )}
      </Row>
    </Container>
  );
}

export default Saved;

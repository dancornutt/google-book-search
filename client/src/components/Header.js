import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <LinkContainer to="/">
        <Navbar.Brand>Google Book Search</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to="/search">
                    <   Nav.Link>Search</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/saved">
                        <Nav.Link>Saved</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
            )
}

export default Header
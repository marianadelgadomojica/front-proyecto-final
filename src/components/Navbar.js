import React from 'react';
import './navBarStyles.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Navbar2 = () => {
    return (

        <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">SOLAR METER</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#casa1">Casa 1</Nav.Link>
            <Nav.Link href="#casa2">Casa 2</Nav.Link>
            <Nav.Link href="#casa3">Casa 3</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
    )
}

export default Navbar2;
import React from 'react'
import './navBarStyles.css'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import { NavLink } from 'react-router-dom'

const Navbar2 = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <NavLink to="/" className="navbar-brand">
                    <Navbar.Brand>
                        <img width={40} src="logo192.png" alt="" />
                        <span> SOLAR METER</span>
                    </Navbar.Brand>
                </NavLink>
                <Nav className="me-auto">
                    <NavLink to="/casa1" className="nav-link">
                        <Nav.Item>Casa 1</Nav.Item>
                    </NavLink>
                    <NavLink to="/casa2" className="nav-link">
                        <Nav.Item>Casa 2</Nav.Item>
                    </NavLink>
                    <NavLink to="/casa3" className="nav-link">
                        <Nav.Item>Casa 3</Nav.Item>
                    </NavLink>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navbar2

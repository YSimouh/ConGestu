﻿import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../design/navbar.css'

export default function Navigation() {
    return (
        <>
            <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
                <Container>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav>
                            <Nav.Link href='/'>Home</Nav.Link>
                            <Nav.Link href='/translate'>Vertaalmachine</Nav.Link>
                            <Nav.Link href='/courses'>Cursus</Nav.Link>
                            <Nav.Link href='/information'>Informatie</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
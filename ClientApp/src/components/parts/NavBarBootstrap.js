import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../design/NavBarBootstrap.css';

export default function Navigation() {
    return (
        <>
        <div className='pos'>
            <Navbar className="NavBarBootstrap" collapseOnSelect fixed='top' expand='sm' >
                <Container>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav>
                            <Nav.Link href='/'>&nbsp;Home&nbsp;</Nav.Link>
                            <Nav.Link href='/courses'>&nbsp;Cursus&nbsp;</Nav.Link>
                            <Nav.Link href='/translate'>&nbsp;Vertaalmachine&nbsp;</Nav.Link>
                            <Nav.Link href='/information'>&nbsp;Informatie&nbsp;</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </div>
        </>
    );
}
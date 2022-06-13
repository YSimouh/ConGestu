import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import {Link} from "react-router-dom";
import '../design/NavBarBootstrap.css';
import  logo from '../pictures/logo-transparant.png';
export default function Navigation() {

    return (
        <>
        <div className='pos'>
            <Navbar className="NavBarBootstrap" collapseOnSelect fixed='top' expand='sm' >
            {/* <h2 className='h2logo'>ConGestu</h2> */}
            {/* <img class="home-logo-img" src = {logo}/>  */}
            <Link to="/" className="home-header-logo"><img class="home-logo-img" src = {logo}/></Link>
                <Container>
                    
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav >
                            {/* <Nav.Link href='/'><i class="fa-solid fa-house fa-xl"></i></Nav.Link> */}
                            <Nav.Link href='/login'> <i class="fa-solid fa-user fa-xl"></i>
                                    {/* <div className="logo-container" style={{ "margin-left": "10px", "margin-right": "10px" }}>
                                        <i class="fa-solid fa-user fa-xl"></i>
                                    </div> */}
                                </Nav.Link>
                            <Nav.Link href='/courses'><i class="fa-solid fa-book fa-xl"></i></Nav.Link>
                            <Nav.Link href='/translate'><i class="fa-solid fa-language fa-xl"></i></Nav.Link>
                            <Nav.Link href='/transcriber'><i class="fa-solid fa-pen-alt fa-xl"></i></Nav.Link>    
                            <Nav.Link href='/information'><i class="fa-solid fa-circle-info fa-xl"></i></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </div>
        </>
        // <>
        //     <div className="container">
                  
        //           <ul className="sidebar">
        //           <li><span>Travelers</span></li>
        //            <li><span><i className="fa fa-home"></i></span><span>&nbsp;Home&nbsp;</span></li>
        //            <li><span><i className="fa fa-dashboard"></i></span><span>&nbsp;Cursus&nbsp;</span></li>
        //            <li><span><i className="fa fa-users"></i></span><span>&nbsp;Vertaalmachine&nbsp;</span></li>
        //            <li><span><i className="fa fa-shopping-cart"></i></span><span>&nbsp;Informatie&nbsp;</span></li>

                   
                   
                   
        //           </ul>
                  
        //           <div className="content">
                     
        //           </div>
        //   </div>
        // </>
    );
}
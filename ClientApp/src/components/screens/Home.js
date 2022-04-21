import React from 'react';
import '../design/home.css';
import  logo from '../pictures/logo-transparant.png';
import '../design/design.css'
import { Navbar, Nav, Container } from 'react-bootstrap';
import {Link } from "react-router-dom";

function Home() {
    return (
        <>

            <h1>Welkom bij ConGestu</h1>
            <img class="home-header-img" src = {logo}/>
            <p>Hier waarschijnlijk een knop om meteen een cursus te proberen</p>
            <p>of anders om in te loggen idk</p>
            <div>                    
                <div class="overlap-group">
                  <h1>
                    Begin met het leren <br/>van gebarentaal
                  </h1>
                  <Link to="/courses" style={{ textDecoration: 'none' }}>
                  <button class="button">
                      CURSUSSEN
                    </button>
                  </Link>         
                  </div>
            </div>
        </>
    )
}

export default Home
import React from 'react'
import '../design/design.css'
import { Navbar, Nav, Container } from 'react-bootstrap';
import {Link } from "react-router-dom";


function Home() {
    return (
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
    )
}

export default Home
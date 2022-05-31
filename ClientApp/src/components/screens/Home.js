import React from 'react';
import '../design/home.css';
import '../design/design.css'
import  logo from '../pictures/logo-transparant.png';
// import videoBG from '../videos/BGvideo.mp4'
// import { Navbar, Nav, Container } from 'react-bootstrap';
import {Link } from "react-router-dom";
function Home() {
    return (
       <div className='center'>
            <h1 id="welkom">Welkom bij</h1>
            <img class="home-header-img" src = {logo}/>     
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
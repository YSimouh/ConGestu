import React from 'react';
import '../design/home.css';
import  logo from '../pictures/logo-transparant.png';
import '../design/design.css'
// import { Navbar, Nav, Container } from 'react-bootstrap';
import {Link } from "react-router-dom";

function isLoggedIn() {

    let currentUser = localStorage.getItem("currentUser");

    currentUser = JSON.parse(currentUser);
    if (currentUser.username != "") {
        return <div className="WelcomeContainer">Welkom terug {currentUser.username}!</div>
    }
    else {
        return <div className="WelcomeContainer">Maak een account aan om progressie op te slaan!</div>
    }
}

function Home() {
    return (
        <div className='center'>
            
            <h1 id="welkom">Welkom bij</h1>
            <img className="home-header-img" src = {logo}/>
                   
                       
            <div className="overlap-group">
                    <h1>
                    Begin met het leren <br/>van gebarentaal
                    </h1>
                    <Link to="/courses" style={{ textDecoration: 'none' }}>
                    <button className="button">
                        CURSUSSEN
                    </button>
                    </Link>         
            </div>
            <div style={{"justifyContent" : "center", "display" : "flex"}}>
                {isLoggedIn()}
            </div>
        </div>
    )
}

export default Home
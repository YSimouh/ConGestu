import React from 'react';
import '../design/home.css';
import '../design/design.css'
import  logo from '../pictures/logo-transparant.png';
// import videoBG from '../videos/BGvideo.mp4'
// import { Navbar, Nav, Container } from 'react-bootstrap';
import {Link } from "react-router-dom";

function isLoggedIn() {


    if (localStorage.getItem("currentUser") === null) {
        return <div className="WelcomeContainer">Maak een account aan om progressie op te slaan!</div>

    }
    else {
        let currentUser = localStorage.getItem("currentUser");
        currentUser = JSON.parse(currentUser);
        if (currentUser.username != "") {
            return <div className="WelcomeContainer">Welkom terug {currentUser.username}!</div>
        }
        else {
            return <div className="WelcomeContainer">Maak een account aan om progressie op te slaan!</div>
        }
    }

}



function Home() {
    return (
        // <div className='center'>
            
        //     <h1 id="welkom">Welkom bij</h1>

        //     <img class="home-header-img" src = {logo}/>     
        //         <div class="overlap-group">
        //           <h1>
        //             Begin met het leren <br/>van gebarentaal
        //             </h1>
        //             <Link to="/courses" style={{ textDecoration: 'none' }}>
        //             <button className="button">
        //                 CURSUSSEN
        //             </button>
        //             </Link>         
        //     </div>
        //     <div style={{"justifyContent" : "center", "display" : "flex"}}>
        //         {isLoggedIn()}
        //     </div>
        // </div>
        <div className="hero-container">
            <Link to="/courses"class="hero-partition left">Leertraject</Link>
            <Link to="/translate"class="hero-partition right">Vertaalmachine</Link>
        </div>
    )
}

export default Home
import React from 'react';
import '../design/home.css';
import '../design/design.css'
import  logo from '../pictures/logo-transparant.png';
// import videoBG from '../videos/BGvideo.mp4'
// import { Navbar, Nav, Container } from 'react-bootstrap';
import {Link } from "react-router-dom";
import { Container, Row , Col} from 'react-bootstrap';


// function isLoggedIn() {


//     if (localStorage.getItem("currentUser") === null) {
//         return <div className="WelcomeContainer">Maak een account aan om progressie op te slaan!</div>

//     }
//     else {
//         let currentUser = localStorage.getItem("currentUser");
//         currentUser = JSON.parse(currentUser);
//         if (currentUser.username != "") {
//             return <div className="WelcomeContainer">Welkom terug {currentUser.username}!</div>
//         }
//         else {
//             return <div className="WelcomeContainer">Maak een account aan om progressie op te slaan!</div>
//         }
//     }

// }



// function Home() {
//     return (
//         <div className='center'>
            
//             <h1 id="welkom">Welkom bij</h1>

//             <img class="home-header-img" src = {logo}/>     
//                 <div class="overlap-group">
//                   <h1>
//                     Begin met het leren <br/>van gebarentaal
//                     </h1>
//                     <Link to="/courses" style={{ textDecoration: 'none' }}>
//                     <button className="button">
//                         CURSUSSEN
//                     </button>
//                     </Link>         
//             </div>
//             <div style={{"justifyContent" : "center", "display" : "flex"}}>
//                 {isLoggedIn()}
//             </div>
//         </div>
//     )
// }

// export default Home

function Card({title,body, button}) {
    return (
      <div className='c-Home'>
          {/* <div className='img-Home'>
              <img src={imageUrl} alt=''/>
          </div> */}
          <div className='c-content'>
              <div>
                  <h3 className='cHome-title' >{title}</h3>
              </div>
              <div className='cHome-body'>
                  {body}
                  
              </div>
              <div className='cHome-button'>
                {button}
              </div>
              
          </div>
          
      </div>
    )
  }
  function Home(){
      return(
          <>
            <Container>
                <Row>
                    <Col>
                        
                        <Card
                            title='Cursus'
                            // imageUrl='https://res.cloudinary.com/dk0z4ums3/image/upload/v1539233654/attached_image/muncul-benjolan-di-belakang-telinga-ini-penyebabnya-alodokter.jpg'
                            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmas, Lorem ipsum dolor sit amet, "
                            button={ <Link to="/courses" style={{ textDecoration: 'none' }}>
                                <button className="button">
                                    Start
                                </button>
                                </Link>}                          
                        />
                         
                    
                    </Col>
                    <Col>
                    <Card
                        title='Vertaalmachine'
                        // imageUrl='https://res.cloudinary.com/dk0z4ums3/image/upload/v1539233654/attached_image/muncul-benjolan-di-belakang-telinga-ini-penyebabnya-alodokter.jpg'
                        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmas, Lorem ipsum dolor sit amet, "
                        button={
                            <Link to="/translate" style={{ textDecoration: 'none' }}>
                                <button className="button">
                                    start
                                </button>
                            </Link>}               />
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Card
                        title='Title'
                        // imageUrl='https://res.cloudinary.com/dk0z4ums3/image/upload/v1539233654/attached_image/muncul-benjolan-di-belakang-telinga-ini-penyebabnya-alodokter.jpg'
                        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmas, Lorem ipsum dolor sit amet, "
                        button={
                            <Link to="/login" style={{ textDecoration: 'none' }}>
                                <button className="button">
                                    start
                                </button>
                            </Link>}                         
                    />
                    </Col>
                    <Col>
                    <Card
                        title='Informatie'
                        // imageUrl='https://res.cloudinary.com/dk0z4ums3/image/upload/v1539233654/attached_image/muncul-benjolan-di-belakang-telinga-ini-penyebabnya-alodokter.jpg'
                        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmas, Lorem ipsum dolor sit amet, "
                        button={ 
                            <Link to="/information" style={{ textDecoration: 'none' }}>
                                <button className="button">
                                    start
                                </button>
                            </Link>}                          />  
                    </Col>
                </Row>
            </Container>
          
          
          </>
      )
  }
  export default Home;
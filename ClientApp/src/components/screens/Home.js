import React from 'react';
import '../design/home.css';
import '../design/design.css'
import  logo from '../pictures/logo-transparant.png';
// import videoBG from '../videos/BGvideo.mp4'
// import { Navbar, Nav, Container } from 'react-bootstrap';
import {Link } from "react-router-dom";
import { Container, Row , Col} from 'react-bootstrap';




function Card({title,body, button}) {
    return (
      <div className='c-Home'>
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
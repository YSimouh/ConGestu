import React from 'react'
import { useLocation } from 'react-router-dom'
import '../design/oefenen.css'
import {Link } from "react-router-dom";
export default function Showlevels(props) {
    const location= useLocation();
	const {questions}=location.state;
  console.log(questions)
  return (
    <div className='oefenheadercontainer'>
        <div className='oefencontainer'>
            <div className='oefenbox'>
            <h1>Level 1</h1>
            <p>MCQ overhoring. Kies één van de 4 antwoorden om te kijken of je het goed hebt</p>
            <Link to={{
                            pathname:'/levelholder',
                            state:{
                            questions:questions 
                            }
                        }}  style={{ textDecoration: 'none' }}>
                        <button class="start">
                            START
                            </button>
                        </Link>  
            </div>
            <div className='oefenbox'>
            <h1>Level 2</h1>
            <p>Gebruik je camera om jezelf te overhoren! Als je gebaar herkend wordt dan zal het scherm automatisch doorgaan. Mocht je het antwoord niet weten dan kun je op overslaan klikken</p>
            <Link to={{
                            pathname:'/level2holder',
                            state:{
                            questions:questions 
                            }
                        }}  style={{ textDecoration: 'none' }}>
                        <button class="start">
                            START
                            </button>
                        </Link>  
            </div>
        </div>
    </div>
  )
}


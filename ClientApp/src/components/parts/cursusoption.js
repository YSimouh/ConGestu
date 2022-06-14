import React from 'react';
import '../design/cursusoption.css'
import {Link } from "react-router-dom";

export default function Cursusoption(props){
    return(   
        <div class="body">
            <div class="holder">
                <h1>
                    {props.header} 
                </h1> 
                <p>
                    {props.text}
                </p>
                <div class="allignbuttons">
                    <Link to={{
                        pathname:props.oefenlink,
                        state:{
                        questions:props.questions,
                        path:props.path,
                        signs:props.signs,
                        syntax: props.syntax,
                        text: props.oefentext,
                        webcam: props.webcam
                        }
                    }}  style={{ textDecoration: 'none' }}>
                    <button class="oefenen">
                        OEFENEN
                        </button>
                    </Link>
                    <Link to={{
                        pathname:props.link,
                        state:{
                        questions:props.questions 
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

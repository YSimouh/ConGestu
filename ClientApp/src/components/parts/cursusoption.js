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
                <Link to={{
                    pathname:props.link,
                    state:{
                       questions:props.questions 
                    }
                }} params={{text:"hello"}} style={{ textDecoration: 'none' }}>
                <button class="start">
                    START
                    </button>
                </Link>         
            </div>   
        </div>           
    )
}

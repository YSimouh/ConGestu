import React from 'react'
import { useLocation } from 'react-router-dom'
import '../design/oefenen.css'

export default function Oefenen(props) {
  const location=useLocation();
  const {path,signs,syntax,text}=location.state;
  return (
    <div>
      <div className='oefenheadercontainer'>
        <div className='oefenheader'>
          <h1>Module oefenen</h1>
          <p>
            {text}
            Probeer eerst te raden wat het antwoord is, als je er niet uit komt kun je het antwoord onthullen. Dit doe je 
            door je muis over de foto te halen. Herhaal dit proces totdat je zeker weet dat je alles weet!
          </p>
        </div>
      </div>
    <div className='oefencontainer'>
        {signs.map((sign) => 
        <div className='oefenbox'>
          <h1>{syntax} {sign}</h1>
          <img src={require("../pictures/"+`${path}`+"/"+`${sign}`+".png")} className="oefenimg"/>
        </div>
        )
        }   
    </div>
    </div>
  )
}


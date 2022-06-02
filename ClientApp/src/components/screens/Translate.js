import React from 'react';
import { Form, Button, Dropdown, DropdownButton, InputGroup } from 'react-bootstrap';
import '../design/translate.css';
import {useState,useEffect} from 'react';
import koekje from '../pictures/2eten-en-drinken/koekje.png'
import koffie from '../pictures/2eten-en-drinken/koffie.png'
import peer from '../pictures/2eten-en-drinken/peer.png'
import melk from '../pictures/2eten-en-drinken/melk.png'
import blij from '../pictures/3omgang/blij.png'
import leuk from '../pictures/3omgang/leuk.png'
import { MdKeyboardVoice,MdFiberManualRecord } from "react-icons/md";
import AR from '../screens/AR'


const SpraakHerkenning = window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpraakHerkenning()

mic.continuous=true
mic.interimResults= true
mic.lang='nl-NL'



function Translate() {
    const [listening,setlistening]=useState(false)
    const signList = ['koekje', 'koffie', 'peer', 'melk', 'blij', 'leuk', 'eten is op'];
    const [message, setMessage] = useState('');
  
    const handleChange = event => {
      setMessage(event.target.value);
    };
  
    let handleClick = event => {
      setlistening(!listening)
      console.log('handling')
      event.preventDefault();
      document.getElementById('error-message-id').classList.remove('show');
      if(signList.includes(message)) {
        const collection = document.getElementsByClassName("picture");
        for (let i = 0; i < collection.length; i++) {
          collection[i].classList.remove('show');
        }
        document.getElementById(message).classList.add('show');
      } else {
        const collection = document.getElementsByClassName("picture");
        for (let i = 0; i < collection.length; i++) {
          collection[i].classList.remove('show');
        }
        document.getElementById('error-message-id').classList.add('show');

      }
    };

    useEffect(()=>{
      handlelisten()
    },[listening])

    const handlelisten = ()=>{
      if(listening){
        mic.start()
        mic.onend=()=>{
          console.log('continue...')
          mic.start
        }
      }
      else{
        mic.stop()
        mic.onend = ()=>{
          console.log('stopped')
        }
      }
      mic.onstart=()=>{
        console.log('Mics on')
      }     
      mic.onresult= event => {
        const transcript= Array.from(event.results)
          .map(result=>result[0])
          .map(result=>result.transcript)
          .join('')
        setMessage(transcript)
        mic.onerror=event=>{
          console.log(event.error)
        }
      }
    }


  return (
    <div className='center'>
      <AR/>
      <div class="intro-container">
        <h1>Welkom op de vertaal pagina</h1>
        <p>
          Op deze pagina kan je tekst vertalen naar gebarentaal, en andersom.
        </p>
        <p>
          Vul in het linker veld de tekst die je vertaald wilt hebben. Druk vervolgens op de "Vertaal" knop.
        </p>
      </div>
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <InputGroup>       
              <InputGroup.Text>
              {!listening?<MdKeyboardVoice size={40} fill='black' onClick={()=>setlistening(!listening)}/>:<MdFiberManualRecord size={40} fill='black' onClick={handleClick}/>}
                {/* <MdKeyboardVoice size={40} fill='black' onClick={()=>setlistening(!listening)}/> */}
                
              </InputGroup.Text>
              <Form.Control onChange={handleChange} value={message} as="textarea" rows={4} />
            </InputGroup>
          </Form.Group>
        </Form>
        <Button onClick={handleClick} variant="primary">Vertaal</Button>{' '}
        <div className="translate-result-container">
          <img src={koekje} className="picture koekje" id="koekje"/>
          <img src={koffie} className="picture koffie" id="koffie"/>
          <img src={peer} className="picture peer" id="peer"/>
          <img src={melk} className="picture melk" id="melk"/>
          <img src={blij} className="picture blij" id="blij"/>
          <img src={leuk} className="picture leuk" id="leuk"/>
          <p className="error-message" id="error-message-id">Dit woord kennen wij niet, probeer het nog eens</p>
        </div>
      </div>
    </div>
  )
}

export default Translate;
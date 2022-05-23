import React from 'react';
import { Form, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import '../design/translate.css';
import {useState} from 'react';
import koekje from '../pictures/2eten-en-drinken/koekje.png'
import koffie from '../pictures/2eten-en-drinken/koffie.png'
import peer from '../pictures/2eten-en-drinken/peer.png'
import melk from '../pictures/2eten-en-drinken/melk.png'
import blij from '../pictures/3omgang/blij.png'
import leuk from '../pictures/3omgang/leuk.png'



function Translate() {
    const signList = ['koekje', 'koffie', 'peer', 'melk', 'blij', 'leuk', 'eten is op'];
    const [message, setMessage] = useState('');
  
    const handleChange = event => {
      setMessage(event.target.value);
    };
  
    let handleClick = event => {
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


  return (
    <div className='center'>
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
            {/* <Form.Label>
              <DropdownButton id="dropdown-basic-button" variant="secondary" title="Selecteer een taal">
                <Dropdown.Item href="#/action-1">Nederlands</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Nederlandse Gebarentaal</Dropdown.Item>
              </DropdownButton>
            </Form.Label> */}
            <Form.Control onChange={handleChange} value={message} as="textarea" rows={4} />
          </Form.Group>
          {/* <Button className="language-switch-button" variant="primary">Wissel om</Button>{' '} */}
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            {/* <Form.Label>
              <DropdownButton id="dropdown-basic-button" variant="secondary" title="Selecteer een taal">
                <Dropdown.Item href="#/action-1">Nederlands</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Nederlandse Gebarentaal</Dropdown.Item>
              </DropdownButton>
            </Form.Label> */}
            {/* <Form.Control as="textarea" rows={4} /> */}
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
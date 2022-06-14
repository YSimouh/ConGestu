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

const SpraakHerkenning = window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpraakHerkenning()

mic.continuous=true
mic.interimResults= true
mic.lang='nl-NL'





function Translate() {
    const [listening,setlistening]=useState(false)
    const [message, setMessage] = useState('');
    
    let errorMessage = document.getElementById('error-message-id')

    const signList = ['koekje', 'koffie', 'peer', 'melk', 'blij', 'leuk', 'eten is op']
    const signList1 = ['ik', 'jij', 'hij', 'zij', 'wij', 'hen']
    const signList2 = ['koekje', 'kaas', 'mensen', 'koffie', 'auto', 'macaroni', 'melk', 'sinaasappel', 'peer']
    const signList3 = ['eten', 'krijgen', 'kunnen', 'praten', 'koken', 'lopen', 'hebben', 'staan', 'zien', 'rijden', 'willen', 'gaan']
    const signList4 = ['blij', 'boos', 'leuk', 'groot', 'klein', 'geel', 'groen', 'mooi', 'lekker', 'niet', 'naam']
    const noNoList = ['de', 'het', 'een']
    let inputArray = []
    let inputString = ''

    var wordList = {
      ik: ['ik'],
      jij:['jij', 'je', 'jou'],
      hij:['hij'],
      zij:['zij'],
      wij:['wij'],
      hen:['hen', 'hun'],

      koek:['koek', 'koekje', 'koekjes', 'koeken'],
      kaas:['kaas', 'kazen', 'kaasje', 'kaasjes'],
      mensen:['mensen', 'mens', 'mensje', 'mensjes'],
      koffie:['koffie', 'koffietje'],
      auto:['auto', "auto's", 'autotje', 'autootjes'],
      macaroni:['macaroni'],
      melk:['melk'],
      sinaasappel:['sinaasappel', 'sinaasappelen', 'sinaasappeltje', 'sinaasapppeltjes'],
      peer:['peer', 'peren', 'peertje', 'peertjes'],

      eten:['eten', 'eet', 'at', 'aten', 'gegeten'],
      krijgen:['krijgen', 'krijg', 'krijgt', 'kreeg', 'kregen', 'gekregen'],
      kunnen:['kunnen', 'kan', 'kon', 'konden', 'gekund' ],
      praten:['praten', 'praat', 'praatte', 'praatten', 'gepraat'],
      koken:['koken', 'kook', 'kookt', 'kookte', 'kookten', 'gekookt'],
      lopen:['lopen', 'loop', 'loopt', 'loopte', 'loopten', 'geloopt'],
      hebben:['hebben', 'heb', 'heeft', 'had', 'hadden', 'gehad'],
      staan:['staan', 'sta', 'staat', 'stond', 'stonden', 'gestaan'],
      zien:['zien', 'zie', 'ziet', 'zag', 'zagen', 'gezien'],
      rijden:['rijden', 'rij', 'rijdt', 'reed', 'reden', 'gereden'],
      willen:['willen', 'wil', 'wilde', 'wilden', 'gewild'],
      gaan:['gaan', 'ga', 'gaat', 'ging', 'gingen', 'gegaan'],

      blij:['blij'],
      boos:['boos'],
      leuk:['leuk'],
      groot:['groot'],
      klein:['klein', 'kleintje'],
      geel:['geel'],
      groen:['groen'],
      mooi:['mooi'],
      lekker:['lekker'],
      niet:['niet'],
      naam:['naam', 'namen', 'naampje', 'naampjes'],
    }

    function createImg(word) {
      var img = document.createElement('img');
      let srcText = '/translate-page/' + word +'.png'
      img.src = srcText;
      img.classList.add('show', 'picture');
      img.alt = word
      img.id = word
      document.getElementById('translate-result-container').appendChild(img);
    } 

    function translateInput(input){
      inputString = input.toLowerCase().trim().replace(/[.,]/g, '').replace(/ +(?= )/g,'');
      inputArray = inputString.split(" ");
      let totalTranslations = 0;

      inputArray.forEach( word => {

        for (const key in wordList) {
          for (const index in wordList[key]){
            if(word == wordList[key][index]){
              let completeWord = wordList[key][0];
              createImg(completeWord);
              totalTranslations += 1;
              console.log(totalTranslations);
            }
          }
        }
  
        if(totalTranslations == 0){
          errorMessage.textContent= '"' + word + '" kennen wij helaas niet';
          errorMessage.classList.add('show');
        }
      })
    }
  
    const handleChange = event => {
      setMessage(event.target.value);
    };

    let handleRecord = event => {
      setlistening(!listening)
      console.log('handling')
      event.preventDefault();
    }
  
    let handleClick = event => {
      event.preventDefault();
      if(setlistening()){setlistening(!listening)}

      let picturesHTML = document.getElementsByClassName("picture");
      Array.from(picturesHTML).forEach( element => {
        element.remove();
      })
      document.getElementById('error-message-id').classList.remove('show');

      translateInput(message);

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
      <div class="intro-container">
        <h1>Welkom op de vertaal pagina</h1>
        <p>
          Op deze pagina kan je tekst vertalen naar gebarentaal, en andersom.
        </p>
        <p>
          Vul in het linker veld de tekst die je vertaald wilt hebben. Druk vervolgens op de "Vertaal" knop.
        </p>
      </div>
      <div className="words-container">
        <h2>Deze woorden zijn op dit moment beschikbaar</h2>
        <div className="words-row">
          {signList1.map(item => {
            return <span>{item}, </span>;
          })}
        </div>
        <div className="words-row">
          {signList2.map(item => {
            return <span>{item}, </span>;
          })}
        </div>
        <div className="words-row">
          {signList3.map(item => {
            return <span>{item}, </span>;
          })}
        </div>
        <div className="words-row">
          {signList4.map(item => {
              return <span>{item}, </span>;
            })}
        </div>
      </div>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <InputGroup>       
              <InputGroup.Text>
              {!listening?<MdKeyboardVoice size={40} fill='black' onClick={()=>setlistening(!listening)}/>:<MdFiberManualRecord size={40} fill='black' onClick={handleRecord}/>}
                {/* <MdKeyboardVoice size={40} fill='black' onClick={()=>setlistening(!listening)}/> */}
                
              </InputGroup.Text>
              <Form.Control onChange={handleChange} value={message} as="textarea" rows={4} />
            </InputGroup>
          </Form.Group>
        </Form>
        <Button onClick={handleClick} variant="primary">Vertaal</Button>{' '}
        <div className="translate-result-container" id="translate-result-container">
        </div>
        <p className="error-message" id="error-message-id">Dit woord kennen wij niet, probeer het nog eens</p>
      </div>
  )
}

export default Translate;
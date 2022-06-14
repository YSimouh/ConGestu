import React from 'react';
import { Form, Button, Dropdown, DropdownButton, InputGroup } from 'react-bootstrap';
import '../design/translate.css';
import {useState,useEffect} from 'react';
import { MdKeyboardVoice,MdFiberManualRecord } from "react-icons/md";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Navigation, Manipulation, Pagination } from "swiper";


import auto from '../pictures/translate-page/auto.png'
import blij from '../pictures/translate-page/blij.png'
import drinken from '../pictures/translate-page/drinken.png'
import eten from '../pictures/translate-page/eten.png'
import huis from '../pictures/translate-page/huis.png'
import ik from '../pictures/translate-page/ik.png'
import koek from '../pictures/translate-page/koek.png'
import koffie from '../pictures/translate-page/koffie.png'
import krijgen from '../pictures/translate-page/krijgen.png'
import leuk from '../pictures/translate-page/leuk.png'
import macaroni from '../pictures/translate-page/macaroni.png'
import mama from '../pictures/translate-page/mama.png'
import mandarijn from '../pictures/translate-page/mandarijn.png'
import melk from '../pictures/translate-page/melk.png'
import naam from '../pictures/translate-page/naam.png'
import niet from '../pictures/translate-page/niet.png'
import papa from '../pictures/translate-page/papa.png'
import peer from '../pictures/translate-page/peer.png'
import sinaasappel from '../pictures/translate-page/sinaasappel.png'
import willen from '../pictures/translate-page/willen.png'


// import "./styles.css";

const SpraakHerkenning = window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpraakHerkenning()

mic.continuous=true
mic.interimResults= true
mic.lang='nl-NL'


function Translate() {
    const [listening,setlistening]=useState(false)
    const [message, setMessage] = useState('');
    
    let errorMessage = document.getElementById('error-message-id')

    let inputArray = []
    let inputString = ''

    var wordList = {
      ik: ['ik'],
      // jij:['jij', 'je', 'jou'],
      // hij:['hij'],
      // zij:['zij'],
      // wij:['wij'],
      // hen:['hen', 'hun'],

      koek:['koeken', 'koekje', 'koekjes', 'koek'],
      // kaas:['kaas', 'kazen', 'kaasje', 'kaasjes'],
      // mensen:['mensen', 'mens', 'mensje', 'mensjes'],
      koffie:['koffie', 'koffietje'],
      auto:['auto', "auto's", 'autotje', 'autootjes'],
      macaroni:['macaroni'],
      melk:['melk'],
      sinaasappel:['sinaasappel', 'sinaasappelen', 'sinaasappeltje', 'sinaasapppeltjes'],
      mandarijn:['mandarijnen', 'mandarijn', 'mandarijntje', 'mandarijntjes'],
      peer:['peer', 'peren', 'peertje', 'peertjes'],
      
      papa:['papa', 'vader', 'pa', 'pap'],
      mama: ['mama', 'mam', 'ma', 'moeder'],

      huis:['huis', 'huizen', 'huisje', 'huisjes'],

      drinken: ['drinken','drink', 'drinkt', 'dronk', 'dronken', 'gedronken'],
      eten:['eten', 'eet', 'at', 'aten', 'gegeten'],
      krijgen:['krijgen', 'krijg', 'krijgt', 'kreeg', 'kregen', 'gekregen'],
      // kunnen:['kunnen', 'kan', 'kon', 'konden', 'gekund' ],
      // praten:['praten', 'praat', 'praatte', 'praatten', 'gepraat'],
      // koken:['koken', 'kook', 'kookt', 'kookte', 'kookten', 'gekookt'],
      // lopen:['lopen', 'loop', 'loopt', 'loopte', 'loopten', 'geloopt'],
      // hebben:['hebben', 'heb', 'heeft', 'had', 'hadden', 'gehad'],
      // staan:['staan', 'sta', 'staat', 'stond', 'stonden', 'gestaan'],
      // zien:['zien', 'zie', 'ziet', 'zag', 'zagen', 'gezien'],
      // rijden:['rijden', 'rij', 'rijdt', 'reed', 'reden', 'gereden'],
      willen:['willen', 'wil', 'wilde', 'wilden', 'gewild', 'wilt'],
      // gaan:['gaan', 'ga', 'gaat', 'ging', 'gingen', 'gegaan'],

      blij:['blij'],
      // boos:['boos'],
      leuk:['leuk', 'leuke'],
      // groot:['groot'],
      // klein:['klein', 'kleintje'],
      // geel:['geel'],
      // groen:['groen'],
      // mooi:['mooi'],
      // lekker:['lekker'],
      niet:['niet', 'geen'],
      naam:['naam', 'namen', 'naampje', 'naampjes'],
    }

    // let wrapperID = document.getElementsByClassName("swiper-wrapper");
    // Array.from(wrapperID).forEach( element => {
    //   element.setAttribute("id", "swiper-wrapper-id");
    // });

    function checkWord(word){
      let x = '';
      if(word == 'ik'){x = ik}
      else if(word == 'koek'){x = koek}
      else if(word == 'koffie'){x = koffie}
      else if(word == 'auto'){x = auto}
      else if(word == 'macaroni'){x = macaroni}
      else if(word == 'melk'){x = melk}
      else if(word == 'sinaasappel'){x = sinaasappel}
      else if(word == 'mandarijn'){x = mandarijn}
      else if(word == 'peer'){x = peer}
      else if(word == 'papa'){x = papa}
      else if(word == 'mama'){x = mama}
      else if(word == 'huis'){x = huis}
      else if(word == 'drinken'){x = drinken}
      else if(word == 'eten'){x = eten}
      else if(word == 'krijgen'){x = krijgen}
      else if(word == 'willen'){x = willen}
      else if(word == 'blij'){x = blij}
      else if(word == 'leuk'){x = leuk}
      else if(word == 'niet'){x = niet}
      else if(word == 'naam'){x = naam}
      return x;
    }

    function createImg(word) {
      var img = document.createElement('img');
      // let srcText = '../pictures/translate-page/' + word +'.png'
      // console.log({word})
      let srcText = checkWord(word);
      img.src = srcText;
      img.classList.add('show', 'picture');
      img.alt = word
      img.id = word
      document.getElementById('translate-result-container').appendChild(img);


      // var newSliderDiv = document.createElement('div');
      // newSliderDiv.classList.add('swiper-slide');
      // newSliderDiv.style = "width:300px";
      // var newSliderImg = document.createElement('img');
      // newSliderImg.src = 'ey';
      // newSliderDiv.appendChild(newSliderImg);

      // let paginationMax = document.getElementsByClassName("swiper-pagination-total");
      // Array.from(paginationMax).forEach( element => {
      //   let paginationCurrent = element.textContent;
      //   console.log(paginationCurrent);
      //   element.textContent = parsent(element.textContent)+1;
      // })

      // // let newImg = 
      // // <div class="swiper-slide" style="width: 300px;">
      // //   <img src="/static/media/koeken.27365d4f7d4c58ad2817.png" class="carousel-picture" alt=""/>
      // // </div>;
      // document.getElementById('swiper-wrapper-id').appendChild(newSliderDiv);
    
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
      {/* <div className="words-container">
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
      </div> */}
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


        {/* <Swiper
            // onSwiper={setSwiperRef}
            // slidesPerView={3}
            centeredSlides={true}
            pagination={{
              type: "fraction",
            }}
            id="swiper-container"
            navigation={true}
            modules={[Pagination, Navigation, Manipulation]}
            className="mySwiper"
          >          
          <SwiperSlide>
            <img
              src={naam}
              className="carousel-picture"
              alt=""
            />
          </SwiperSlide>
        </Swiper> */}

        


        <div className="translate-result-container" id="translate-result-container">
          {/* <div className="translate-result-wrapper">
            <p>Text</p>
            <img className="translate-result-picture" />
          </div> */}
        </div>

        <p className="error-message" id="error-message-id">Dit woord kennen wij niet, probeer het nog eens</p>
      </div>
  )
}

export default Translate;
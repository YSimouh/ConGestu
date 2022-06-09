import React, { useEffect, useState } from 'react'
import { MdKeyboardVoice,MdFiberManualRecord } from "react-icons/md";

const SpraakHerkenning = window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpraakHerkenning()

mic.continuous=true
mic.interimResults= true
mic.lang='nl-NL'

export default function Transcriber(props) {
    const [listening,setlistening]=useState(false)
    const [message, setMessage] = useState('');
    
    const handleChange = event => {
        setMessage(event.target.value);
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
    <div>
              {!listening?<MdKeyboardVoice size={40} fill='black' onClick={()=>setlistening(!listening)}/>:<MdFiberManualRecord size={40} fill='black' onClick={()=>setlistening(!listening)}/>}
              <p style={{ color: 'black' }}>{message}</p>
    </div>
  )
}


import React from 'react'; 
import {useState,useEffect} from 'react';
import { Form, Button, Dropdown, DropdownButton, InputGroup } from 'react-bootstrap';
import '../design/transcriber.css';
import { MdKeyboardVoice,MdFiberManualRecord,MdFormatSize } from "react-icons/md";
import Slider from 'rc-slider'
import Range from 'rc-slider'
import 'rc-slider/assets/index.css';
// import { ColorPicker, useColor } from "react-color-palette";
// import "react-color-palette/lib/css/styles.css";
import {BlockPicker} from 'react-color' 
import {AwesomeButton,AwesomeButtonProgress,AwesomeButtonSocial,} from 'react-awesome-button';
import styles from '../design/buttondesign.css'
//import 'react-awesome-button/dist/themes/theme-rickiest.css';
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognition()
mic.continuous = true
mic.interimResults = true
mic.lang='nl-NL';

function transcriber() {
  const [isListening, setIsListening] = useState(false)
  const [note, setNote] = useState(null)
  const [savedNotes, setSavedNotes] = useState([])
  const [size,setsize]= useState(16)
  const [color,setcolor]=useState('#000000')
  console.log(color)
  //const [color, setColor] = useColor("hex", "#121212");

  useEffect(() => {
    handleListen()
  }, [isListening])

  const handleListen = () => {
    if (isListening) {
      mic.start()
      mic.onend = () => {
        console.log('continue..')
        mic.start()
      }
    } else {
      mic.stop()
      mic.onend = () => {
        console.log('Stopped Mic on Click')
      }
    }
    mic.onstart = () => {
      console.log('Mics on')
    }

    mic.onresult = event => {
      const transcript = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('')
      console.log(transcript)
      setNote(transcript)
      mic.onerror = event => {
        console.log(event.error)
      }
    }
  }

  const handleSaveNote = () => {
    setSavedNotes([...savedNotes, note])
    setNote('')
  }

  return (
    <>
      <h1>Spraak naar tekst</h1>
      <div className="container">
        <div className="box">
          <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <InputGroup>
            <InputGroup.Text>
              {!isListening?<MdKeyboardVoice size={40} fill='black' onClick={()=>setIsListening(!isListening)}/>:<MdFiberManualRecord size={40} fill='black' onClick={()=>setIsListening(!isListening)}/>}                
              </InputGroup.Text>       
            <Form.Control value={note} as="textarea" rows={4} />
            </InputGroup>
          </Form.Group>
        </Form>
        </div>
        <div className='Changecontainer'>
          <div className='rowcontainer'>
            <AwesomeButton   onPress={()=>handleSaveNote()} size='small' type="primary">Opslaan</AwesomeButton>
            <AwesomeButton   onPress={()=>setSavedNotes([])} size='small' type={savedNotes==0 ? "placeholder":"primary"}>{savedNotes==0 ? '':"Reset"}</AwesomeButton>
          </div>
          <div className='rowcontainer'>
            <MdFormatSize size={40} fill='black'/>
            <Slider
              defaultValue={16}
              min={10}
              max={50}
              onChange={(value) => {
                setsize(value)
              }}
              handleStyle={{
                borderColor: '#3F88C5',
                backgroundColor: '#1D3461',
              }}
              />
          </div>
        </div>
        <div className="box">
          {/* <h2>Opnames</h2> */}
          {savedNotes.map(n => (
            <p style={{color:color,paddingBottom:15,fontSize:size}} key={n}>{n}</p>
          ))}
        </div>
        <BlockPicker
          color={color}
          onChangeComplete={(color)=>setcolor(color.hex)}
          colors={['#000000', '#F47373', '#697689', '#37D67A', '#2CCCE4', '#555555', '#dce775', '#ff8a65', '#ba68c8']}
          />
      </div>
    </>
  )
}

export default transcriber
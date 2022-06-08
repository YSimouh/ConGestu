import React from 'react'; 
import {useState,useEffect} from 'react';
import { Form, Button, Dropdown, DropdownButton, InputGroup } from 'react-bootstrap';
import '../design/transcriber.css';
import { MdKeyboardVoice,MdFiberManualRecord } from "react-icons/md";

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognition()

mic.continuous = true
mic.interimResults = true
mic.lang='nl-NL';

function transcriber() {
  const [isListening, setIsListening] = useState(false)
  const [note, setNote] = useState(null)
  const [savedNotes, setSavedNotes] = useState([])
    
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
        <div className='knoppen'>
          <Button onClick={() => setIsListening(prevState => !prevState)}>
            Opnemen
          </Button>
          <Button onClick={handleSaveNote} disabled={!note}>
            Opslaan
          </Button>

        </div>
        <div className="box">
          <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <InputGroup>       
            <Form.Control value={note} as="textarea" rows={4} />
            </InputGroup>
          </Form.Group>
        </Form>
        </div>
        <div className="box">
          <h2>Opnames</h2>
          {savedNotes.map(n => (
            <p key={n}>{n}</p>
          ))}
        </div>
    </div>
    </>
  )
}

export default transcriber
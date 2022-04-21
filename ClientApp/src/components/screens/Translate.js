import React from 'react';
import { Form, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import '../design/translate.css';

function Translate() {
  return (
    <div>
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
        {/* <div class="dropdown-container">
          <DropdownButton id="dropdown-basic-button" title="Dropdown button">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
          <DropdownButton id="dropdown-basic-button" title="Dropdown button">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
        </div> */}
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>
              <DropdownButton id="dropdown-basic-button" variant="secondary" title="Selecteer een taal">
                <Dropdown.Item href="#/action-1">Nederlands</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Nederlandse Gebarentaal</Dropdown.Item>
              </DropdownButton>
            </Form.Label>
            <Form.Control as="textarea" rows={4} />
          </Form.Group>
          <Button className="language-switch-button" variant="primary">Wissel om</Button>{' '}
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>
              <DropdownButton id="dropdown-basic-button" variant="secondary" title="Selecteer een taal">
                <Dropdown.Item href="#/action-1">Nederlands</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Nederlandse Gebarentaal</Dropdown.Item>
              </DropdownButton>
            </Form.Label>
            <Form.Control as="textarea" rows={4} />
          </Form.Group>
        </Form>
        <Button variant="primary">Vertaal</Button>{' '}
      </div>
    </div>
  )
}

export default Translate;
import React from 'react'
import { Container, Row , Col} from 'react-bootstrap';
import '../design/Contact.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Contact() {
  const notify = () => toast("message sent successfully",{
    position: "bottom-center",
    });
  return (
    <Container className='about-us'>
      <Row>
        <Col>
          <div className='contact-info'>
              <Row className='info-text'>
                  <h1 className='h2-title'>
                    Ons team
                  </h1>
                  <address className='email-adress'>
                    <strong>Email : info@congestu.com</strong>
                    <br/>
                    <br/>
                    <p>Phone: 010 - 4557896854</p>
                  </address>
                  <p>
                  Hogeschool Rotterdam
                  Instituut voor Communicatie en Informatietechnologie
                  Wijnhaven 107
                  3011 WN Rotterdam
                  </p>
              </Row>
          </div>
        </Col>
        <Col className='contact-us'>
          <Row>
            <h1 className='h1-title'>
              Neem contact op
              </h1>
          </Row>
          <Col>
            <form className='contact-form'>
              <Row>
                <Row className='form-group'>
                  <input className='form-control'
                  id="name"
                  name='name'
                  placeholder="Uw naam"
                  type="text"
                  />
                </Row>
                <Row className='form-group'>
                  <input className='form-control'
                  id="email"
                  name='email'
                  placeholder="Uw e-mailadres"
                  type="email"
                  />
                </Row>
              </Row>

            </form>
          </Col>
          <textarea className='message-text'
              id="message"
              name='message'
              placeholder="Typ hier uw vraag ..."
              rows='5'
            ></textarea>
          <div className='btn-d'>
            <button className='btn-send'onClick={notify}>Versturen</button>
            <ToastContainer
              toastStyle={{ backgroundColor: "#1d3461" }}
              autoClose={1000}
         
            />
          </div>
        </Col>
        </Row>     
    </Container>
  )
}

export default Contact

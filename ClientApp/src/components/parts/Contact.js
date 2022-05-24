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
                    Our team
                  </h1>
                  <address className='email-adress'>
                    <strong>Email : developer@javascript.com</strong>
                    <br/>
                    <br/>
                    <p>Phone: 0123456789</p>
                  </address>
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
              </Row>
          </div>
        </Col>
        <Col className='contact-us'>
          <Row>
            <h1 className='h1-title'>
              Contact us
              </h1>
          </Row>
          <Col>
            <form className='contact-form'>
              <Row>
                <Col className='form-group'>
                  <input className='form-control'
                  id="name"
                  name='name'
                  placeholder="Name"
                  type="text"
                  />
                </Col>
                <Col className='form-group'>
                  <input className='form-control'
                  id="email"
                  name='email'
                  placeholder="Email"
                  type="email"
                  />
                </Col>
              </Row>

            </form>
          </Col>
          <textarea className='message-text'
              id="message"
              name='message'
              placeholder="Message"
              rows='5'
            ></textarea>
          <div className='btn-d'>
            <button className='btn-send'onClick={notify}>Send</button>
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

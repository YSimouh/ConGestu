import React from 'react';
import { Container, Row , Col} from 'react-bootstrap';
import CardInfo from '../parts/CardInfo';
import FAQs from '../parts/FAQ';
import Contact from '../parts/Contact';


function Information() {
  return (
    <>
    <Container>
      <Row>
        <Col>
        <CardInfo 
        title='Title'
        imageUrl='https://res.cloudinary.com/dk0z4ums3/image/upload/v1539233654/attached_image/muncul-benjolan-di-belakang-telinga-ini-penyebabnya-alodokter.jpg'
        body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

        />
        </Col>
        <Col>
        <CardInfo 
        title='Title'
        imageUrl='https://th.bing.com/th/id/R.58f480ef148e35a5664e5181ba400c50?rik=lXWCuP5YXjZ92Q&riu=http%3a%2f%2fthumbs.dreamstime.com%2fz%2fhet-woord-doof-gebarentaal-11945734.jpg&ehk=HnNmTufdwgKi3KTq4RGVPVRiqjYZU0nf8fiL3Pk7rHY%3d&risl=&pid=ImgRaw&r=0'
        body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        />
        </Col>
        <Col>
        <CardInfo 
        title='Title'
        imageUrl='https://radio2.be/sites/default/files/styles/1200x630/public/2020-04/GettyImages-1091442578.jpg?itok=U6RRFSQL'
        body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        />
        </Col>

      </Row>
    </Container>
    <Container>
      <FAQs></FAQs>
    </Container>
    <Container>
      <Contact></Contact>
    </Container>

    </>
)
}

export default Information

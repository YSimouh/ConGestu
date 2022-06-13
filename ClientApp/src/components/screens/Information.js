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
        title='Communicatie tussen doven en horenden'
        imageUrl='https://res.cloudinary.com/dk0z4ums3/image/upload/v1539233654/attached_image/muncul-benjolan-di-belakang-telinga-ini-penyebabnya-alodokter.jpg'
        body='Als je als horende geboren bent, is het een vanzelfsprekendheid dat je communiceert door geluid te maken wat anderen kunnen verstaan. Als je doof bent, werkt dit natuurlijk heel anders. De communicatie gaat door middel van signalen die mensen maken met bewegingen van hun lichaam, zoals handgebaren en gezichtsuitdrukkingen. Dit is een hele andere manier van commmuniceren!'

        />
        </Col>
        <Col>
        <CardInfo 
        title='Gebarentaal'
        imageUrl='https://th.bing.com/th/id/R.58f480ef148e35a5664e5181ba400c50?rik=lXWCuP5YXjZ92Q&riu=http%3a%2f%2fthumbs.dreamstime.com%2fz%2fhet-woord-doof-gebarentaal-11945734.jpg&ehk=HnNmTufdwgKi3KTq4RGVPVRiqjYZU0nf8fiL3Pk7rHY%3d&risl=&pid=ImgRaw&r=0'
        body='Gebarentaal is een integraal onderdeel van de communicatie tussen doven, alsmede tussen doven en horenden. De woordenschat bestaat niet uit woorden gevormd door spraak, maar handgebaren. Er wordt onderscheid gemaakt tussen Nederlandse Gebarentaal (NGT) en Nederlands Met Gebaren (NMG). De laatste is gesproken Nederlands ondersteund met gebaren, dus volgt hoofdzakelijk de grammatica van Nederlands, maar NGT heeft zijn volledig eigen grammatica en "zinsopbouw".'
        />
        </Col>
        <Col>
        <CardInfo 
        title='Leer gebarentaal met ConGestu!'
        imageUrl='https://radio2.be/sites/default/files/styles/1200x630/public/2020-04/GettyImages-1091442578.jpg?itok=U6RRFSQL'
        body='Op deze site vind je een gratis cursus waarmee je gemakkelijk en vermakelijk gebarentaal kunt leren. Leer het handgebarenalfabet en kom meer te weten over hoe je kan communiceren met gebaren en lichaamstaal! Daarnaast vind je ook een vertaalmachine voor gesproken taal naar gebarentaal, zowel voor de situatie als wanneer je wil weten hoe je bepaalde woorden in gebarentaal "zegt".'
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

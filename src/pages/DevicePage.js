import React from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import star from '../assets/star1.jpg'

const DevicePage = () => {
  const device = {id: 1, name: 'Sunset H3', price: 1200, rating: 4, img: 'https://st.depositphotos.com/2562265/5111/i/600/depositphotos_51112145-stock-photo-lenovo-s6000.jpg'}
  const description = [
    {id: 1, title: 'RAM', description: 'ram memory ddr4 32 GB'},
    {id: 2, title: 'cooler', description: 'water cpu cooler'},
  ]
  return (
    <Container className='mt-3'>
     <Row>
      <Col md={4}>
          <Image width={300} height={300} src={device.img} />
        </Col>
        <Col md={4}>
          <Row className='d-flex flex-column align-items-center'>
            <h3>{device.name}</h3>
            <div 
              className='d-flex align-items-center justify-content-center'
              style={{background: `url(${star}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', fontSize: 64}}
            >
                {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className='d-flex flex-column align-items-center justify-content-around'
            style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgrey'}}
          >
            <h3>{device.price}</h3>
            <Button variant={'outline-dark'}>Add to cart</Button>
          </Card>
        </Col>
     </Row>
      <Row className='d-flex flex-column m-3'>
        <h2>Description</h2>
        {description.map(info => (
          <Row 
            key={info.id}
            style={{background: info.id % 2 === 0 && 'lightgrey', padding: 10}}
          >
            {info.title} : {info.description}
          </Row>
        ))}
      </Row>
    </Container>
  )
}

export default DevicePage
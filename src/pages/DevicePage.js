import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import star from '../assets/star1.jpg'

const DevicePage = () => {
  const device = {id: 1, name: 'Sunset H3', price: 1200, rating: 4, img: 'https://st.depositphotos.com/2562265/5111/i/600/depositphotos_51112145-stock-photo-lenovo-s6000.jpg'}
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
          
        </Col>
     </Row>
    </Container>
  )
}

export default DevicePage
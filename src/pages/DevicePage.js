import React, {useState, useEffect} from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import star from '../assets/star1.jpg';
import {useParams} from 'react-router-dom';
import { fetchDevice } from '../http/deviceApi';

const DevicePage = () => {
  const [device, setDevice] = useState({info: []});
  const {id} = useParams();
  useEffect(() => {
    fetchDevice(id).then(data => setDevice(data))
  },[id])
  return (
    <Container className='mt-3'>
     <Row>
      <Col md={4}>
          <Image width={300} height={300} src={process.env.REACT_APP_API + device.img} />
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
        {device.info.map(info => (
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
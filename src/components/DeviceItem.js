import React from 'react'
import { Card, Col, Image } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import star from '../assets/star1.jpg';
import { DEVICE_ROUTE } from '../utils/consts';

const DeviceItem = ({device}) => {
    const history = useHistory();
    return (
        <Col md={3} className='mt-3' onClick={() => history.push(DEVICE_ROUTE + '/' + device.id) }>
            <Card style={{width: 150, cursor: 'pointer'}} border={'light'}>
                <Image width={150} height={150} src={device.img} />
                <div className='text-black-50 mt-1 d-flex text-black-50 align-items-center justify-content-between '>
                    <div>Apple</div>
                    <div className='d-flex align-items-center'>
                        <div>{device.rating}</div>
                        <Image style={{width: 20, height: 20}} src={star}/>
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    )
}

export default DeviceItem
import React, {useContext, useState} from 'react'
import { Modal, Form, Button, Dropdown, Row, Col } from 'react-bootstrap'
import { Context } from '../..'

const CreateDevice = ({show, onHide}) => {
  const {device} = useContext(Context);
  const [info, setInfo] = useState([]);

  const addInfo = () => {
    setInfo([...info, {title: '', decription: '', number: Date.now()}])
  }

  const removeInfo = (number) => {
    setInfo(info.filter(i => i.number !== number))
  }


  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Device
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className='mt-3 mb-2'>
            <Dropdown.Toggle>Choose Type</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map(type => 
                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className='mt-3 mb-2'>
            <Dropdown.Toggle>Choose Brand</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.brands.map(brand => 
                <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            className="mt-3" 
            placeholder='Enter the name of device'
          />
          <Form.Control
            className="mt-3" 
            placeholder='Enter the cost of device'
            type='number'
          />
          <Form.Control
            className="mt-3" 
            type='file'
          />
          <hr />
          <Button
            variant={'outline-dark'}
            onClick={addInfo}
          >
            Add new property
          </Button>
          {info.map(i => 
            <Row className='mt-3' key={i.number}>
              <Col md={4}>
                <Form.Control 
                  placeholder='add the name of property'
                />
              </Col>
              <Col md={4}>
                <Form.Control 
                  placeholder='add description of property'
                />
              </Col>
              <Col md={4}>
                <Button 
                  variant={'outline-danger'}
                  onClick={() => removeInfo(i.number)}
                >Delete a characteristic</Button>
              </Col>
            </Row>
          )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-danger' onClick={onHide} >Close</Button>
        <Button variant='outline-success' onClick={onHide} >Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreateDevice
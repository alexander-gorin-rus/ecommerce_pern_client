import React, {useState} from 'react'
import {Modal, Button, Form} from 'react-bootstrap'
import { createType } from '../../http/deviceApi'


const CreateType = ({show, onHide}) => {
  const [value, setValue] = useState('')
  const addType = () => {
    createType({name: value}).then(data => setValue(''))
    alert('New Type was successfully added');
    onHide()
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
          Add Type
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Form.Control 
              value={value}
              onChange={e => setValue(e.target.value)}
              placeholder={'Add a new type'}
            />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-danger' onClick={onHide} >Close</Button>
        <Button variant='outline-success' onClick={addType} >Add Type</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreateType
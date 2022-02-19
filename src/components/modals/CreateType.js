import React from 'react'
import {Modal, Button, Form} from 'react-bootstrap'


const CreateType = ({show, onHide}) => {
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
                placeholder={'Add a new type'}
            />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-danger' onClick={onHide} >Close</Button>
        <Button variant='outline-success' onClick={onHide} >Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreateType
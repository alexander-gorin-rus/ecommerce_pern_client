import React from 'react';
import { Button, Card, Container, Form, Row } from 'react-bootstrap'
import { NavLink, useLocation } from 'react-router-dom';
import { REGISTRATION_ROUTE, LOGIN_ROUTE } from '../utils/consts';

const Auth = () => {

  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE
  return (
      <Container 
        className='d-flex justify-content-center align-items-center'
        style={{height: window.innerHeight - 54}}  
      >
      <Card style={{width: 600}} className='p-5'>
        {isLogin ? <h3 className='text-center'>Authorization</h3> : <h3 className='text-center'>Registration</h3>}
        <Form className='d-flex flex-column'>
          <Form.Control
            className='mt-3' 
            placeholder='Enter email'
          />
          <Form.Control
            className='mt-3' 
            placeholder='Enter password'
          />
        <Row className='d-flex justify-content-between mt-3 pl-3 pr-3'>
          {isLogin ? 
            <div className='pr-5'>No account? <NavLink className='pl-5' to={REGISTRATION_ROUTE}>Register</NavLink></div> 
            :
            <div className='pr-5'>Have account? <NavLink className='pl-5' to={LOGIN_ROUTE}>Login</NavLink></div> 
          } 
          <Button
            variant={"outline-success"}>
              {isLogin ? 'Login' : 'Register'}
          </Button>
        </Row>
        </Form>
      </Card>
      </Container>
  )
}

export default Auth
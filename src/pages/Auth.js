import React, {useContext, useState} from 'react';
import { Button, Card, Container, Form, Row } from 'react-bootstrap'
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import { login, registration } from '../http/userApi';
import { REGISTRATION_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite'
import { Context } from '..';

const Auth = observer(() => {
  const {user} = useContext(Context);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory();
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  const click = async () => {
    try {
      let data;
        if (isLogin) {
          data = await login(email, password)
        } else {
          data = await registration(email, password)
        }
        user.setUser(user);
        user.setIsAuth(true);
        history.push(SHOP_ROUTE)
    } catch (e) {
      alert(e.response.data.message)
    }

  }
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
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Form.Control
            className='mt-3' 
            placeholder='Enter password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            type='password'
          />
        <Row className='d-flex justify-content-between mt-3 pl-3 pr-3'>
          {isLogin ? 
            <div className='pr-5'>No account? <NavLink className='pl-5' to={REGISTRATION_ROUTE}>Register</NavLink></div> 
            :
            <div className='pr-5'>Have account? <NavLink className='pl-5' to={LOGIN_ROUTE}>Login</NavLink></div> 
          } 
          <Button
            onClick={click}
            variant={"outline-success"}>
              {isLogin ? 'Login' : 'Register'}
          </Button>
        </Row>
        </Form>
      </Card>
      </Container>
  )
})

export default Auth
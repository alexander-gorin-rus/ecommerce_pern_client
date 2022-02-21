import React, { useContext } from 'react';
import { Context } from '..';
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE, SHOP_ROUTE, ADMIN_ROUTE, } from '../utils/consts';
import {observer} from 'mobx-react-lite'
import { useHistory } from 'react-router-dom';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

const NavBar =  observer(() => {
    const {user} = useContext(Context);
    const history = useHistory();

    const logOut = () => {
      user.setUser({})
      user.setIsAuth(false)
      history.push(LOGIN_ROUTE)
    }
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink style={{color: 'white',}} to={SHOP_ROUTE}>G_Shop</NavLink>
        {user.isAuth ?
          <Nav className='ml-auto' style={{color: 'white'}}>
            <Button variant={'outline-light'} onClick={() => history.push(ADMIN_ROUTE)} className='mx-3'>Admin panel</Button>
            <Button variant={'outline-light'} onClick={() => logOut()}>Logout</Button>
          </Nav>
          :
          <Nav className='ml-auto' style={{color: 'white'}}>
            <Button variant={'outline-light'} onClick={() => history.push(LOGIN_ROUTE)}>Authorization</Button>
          </Nav>
        }
      </Container>
    </Navbar>
   
  )
})

export default NavBar
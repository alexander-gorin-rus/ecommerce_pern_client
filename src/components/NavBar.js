import React, { useContext } from 'react';
import { Context } from '..';
import { NavLink } from 'react-router-dom';
import { BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE, ADMIN_ROUTE, LOGOUT_ROUTE } from '../utils/consts';
import {observer} from 'mobx-react-lite'
import { useHistory } from 'react-router-dom';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

const NavBar =  observer(() => {
    const {user} = useContext(Context);
    const history = useHistory();
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink style={{color: 'white',}} to={SHOP_ROUTE}>G_Shop</NavLink>
        {user.isAuth ?
          <Nav className='ml-auto' style={{color: 'white'}}>
            <Button variant={'outline-light'} onClick={() => history.push(ADMIN_ROUTE)} className='mx-3'>Admin panel</Button>
            <Button variant={'outline-light'} onClick={() => history.push(LOGIN_ROUTE)}>Logout</Button>
          </Nav>
          :
          <Nav className='ml-auto' style={{color: 'white'}}>
            <Button variant={'outline-light'} onClick={() => user.setIsAuth(true)}>Authorization</Button>
          </Nav>
        }
      </Container>
    </Navbar>
    // <>
    //   <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //     <div className="container-fluid">
    //     <NavLink to={SHOP_ROUTE}>G_Shop</NavLink>
    //       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    //         <span className="navbar-toggler-icon"></span>
    //       </button>
    //       {user.isAuth ? 
    //         (
    //           <div className="collapse navbar-collapse" id="navbarText">
    //             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //             <li className="nav-item">
    //                 <NavLink className="nav-link active" aria-current="page" to={DEVICE_ROUTE}>Devices</NavLink>
    //               </li>
    //               <li className="nav-item">
    //                 <NavLink className="nav-link active" aria-current="page" to={ADMIN_ROUTE}>Admin</NavLink>
    //               </li>
    //               <li className="nav-item">
    //                 <NavLink className="nav-link active" aria-current="page" to={BASKET_ROUTE}>Basket</NavLink>
    //               </li>
    //               <li className="nav-item">
    //                 <NavLink className="nav-link" to={LOGOUT_ROUTE} onClick={() => user.setIsAuth(false)}>Logout</NavLink>
    //               </li>
    //             </ul>
    //           </div>
    //         )
    //           :
    //         (
    //           <div className="collapse navbar-collapse" id="navbarText">
    //             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //               <li className="nav-item">
    //                 <NavLink className="nav-link active" aria-current="page" to={DEVICE_ROUTE}>Devices</NavLink>
    //               </li>
    //               <li className="nav-item">
    //                 <NavLink className="nav-link" to={LOGIN_ROUTE}>Login</NavLink>
    //               </li>
    //               <li className="nav-item">
    //                 <NavLink className="nav-link" to={REGISTRATION_ROUTE} onClick={() => user.setIsAuth(true)}>Registration</NavLink>
    //               </li>
    //             </ul>
    //           </div>
    //         )
    //       }
    //     </div>
    //   </nav>
    // </>
  )
})

export default NavBar
import React, { useContext } from 'react';
import {Switch, Route, Redirect,} from 'react-router-dom';
import { Context } from '../index';
import { authRouter, publicRouter } from '../routes';
import { SHOP_ROUTE } from '../utils/consts';

const AppRouter = () => {
    
const {user} = useContext(Context);
console.log(user)

return (
    <Switch>
        {user.isAuth === true && authRouter.map(({path, Component}) => 
            <Route key={path} path={path} component={Component} exact />
        )}
        {publicRouter.map(({path, Component}) => 
            <Route key={path} path={path} component={Component} exact />
        )}
        <Redirect to={SHOP_ROUTE} />
    </Switch>
  )
}

export default AppRouter
import React from 'react';
import { Route, Switch} from 'react-router-dom';
import * as ROUTES from '../RouterGroupAuthUser/constants/routes'
import HomePage from '../RouterGroupAuthUser/Pages/HomePage/HomePage'


const RouterGroupAuthUser: React.FC = () => {

    return(
        <Switch>
            <Route path={ROUTES.HOME} component={HomePage}  />

        </Switch>
        
    )
}

export default RouterGroupAuthUser;
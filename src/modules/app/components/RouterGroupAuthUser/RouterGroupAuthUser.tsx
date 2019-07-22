import React from 'react';
import { Route, Switch, withRouter, RouteComponentProps} from 'react-router-dom';
import * as ROUTES from '../RouterGroupAuthUser/constants/routes'
import HomePage from '../RouterGroupAuthUser/Pages/HomePage/HomePage'

interface Props extends RouteComponentProps {}


const RouterGroupAuthUserBase: React.FC<Props> = ({history}) => {

    //DO NOT UNCOMMENT It creates an infinte loop?
    //history.push('/home');

    return(
        <Switch>
            <Route path={ROUTES.HOME} component={HomePage}  />

        </Switch>
        
    )
}

const RouterGroupAuthUser = withRouter(RouterGroupAuthUserBase)

export default RouterGroupAuthUser;
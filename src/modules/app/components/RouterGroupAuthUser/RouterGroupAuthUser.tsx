import React, {useEffect} from 'react';
import { Route, Switch, useHistory, useLocation, Redirect} from 'react-router-dom';
import * as ROUTES from '../RouterGroupAuthUser/constants/routes'
import HomePage from '../RouterGroupAuthUser/Pages/HomePage/HomePage'
import _ from 'underscore';




const RouterGroupAuthUser: React.FC = () => {

    const history = useHistory();
    const location = useLocation();
/*
    useEffect(() => {
        if(_.contains(['/', '/signin', '/signup'], location.pathname)) {
            history.push('/home') 
        }
        
    })

    */
    return(
        <div>
            <Switch>
                
                
                <Route path={'/home'} component={HomePage} exact={true}  /> 

                <Redirect to='/home' />

                
            </Switch>

            
            
            
        </div>
        
        
    )
}



export default RouterGroupAuthUser;
import React, {useEffect} from 'react';
import { Route, Switch, useHistory, useLocation, Redirect} from 'react-router-dom';
import * as ROUTES from '../RouterGroupAuthUser/constants/routes'
import HomePage from '../RouterGroupAuthUser/Pages/HomePage/HomePage'
import {withFirebase} from './Pages/utils/firebaseApp'
import _ from 'underscore';

import Firebase from './Pages/utils/firebaseApp';


interface Props {
    Firebase : Firebase
    
}

const RouterGroupAuthUser: React.FC<Props> = (props : Props) => {

    const history = useHistory();
    const location = useLocation();

    /*useEffect(() => {
        const listener = props.Firebase.auth.onAuthStateChanged((authUser) => {

        })

        return () => {
            listener();
        }
        
    })*/

    
    return(
        <div>
            <Switch>
                
                
                <Route path={'/home'} component={HomePage} exact={true}  /> 

                <Redirect to='/home' />

                
            </Switch>

            
            
            
        </div>
        
        
    )
}



export default withFirebase(RouterGroupAuthUser);
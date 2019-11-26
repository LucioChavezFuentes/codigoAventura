import React from 'react';
import { Route, Switch, Redirect,} from 'react-router-dom';
import * as ROUTES from '../RouterGroupAuthUser/constants/routes'
import HomePage from '../RouterGroupAuthUser/Pages/HomePage/HomePage'
import {withFirebase} from './Pages/utils/firebaseApp'
import _ from 'underscore';

import Firebase from './Pages/utils/firebaseApp';


interface Props {
    Firebase : Firebase
    
}

class RouterGroupAuthUser extends React.Component<Props> {

    render() {
        return(
            <div>
                <Switch>
                    
                    <Route path={'/home'} component={HomePage} exact={true}  /> 
    
                    <Redirect to='/home' />
                    
                </Switch>
                
            </div>
            
        )
    }
}



export default withFirebase(RouterGroupAuthUser);
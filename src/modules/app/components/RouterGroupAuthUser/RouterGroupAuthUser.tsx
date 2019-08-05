import React from 'react';
import { Route, Switch} from 'react-router-dom';
import * as ROUTES from '../RouterGroupAuthUser/constants/routes'
import HomePage from '../RouterGroupAuthUser/Pages/HomePage/HomePage'




const RouterGroupAuthUser: React.FC = () => {

    //DO NOT UNCOMMENT It creates an infinte loop?
    //history.push('/home'); <Redirect  to={ROUTES.HOME} />
    
    return(
        <div>
            <Switch>
                
                
                <Route path={'/home'} component={HomePage} exact  /> 

                

                

            </Switch>


            
            
            
        </div>
        
        
    )
}



export default RouterGroupAuthUser;
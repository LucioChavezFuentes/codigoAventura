import React from 'react';
import { Route, Switch} from 'react-router-dom';
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import {Landing , About, Contact, Error, SignUpPage} from './Pages';
import * as ROUTES from './constants/routes'
import './TransitionGroupNonAuthUser.scss';


const TransitionGroupNonAuthUser:React.FC = () => {
    
    return(
      <div>

      
        <Route 
// tslint:disable-next-line: jsx-no-multiline-js
              render={({location}) => (
                <TransitionGroup>

                
                  <CSSTransition timeout={300} classNames='fade' key={location.key}>
                    
                    <Switch location={location}>
                      
                      <Route path={ROUTES.LANDING} component={Landing} exact  />

                      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />

                      <Route path="/about" component={About}  />

                      <Route path="/contact" component={Contact}  />

                      <Route component={Error}/>

                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
                )} 
          />
        
      </div>
    ) 
}

export default TransitionGroupNonAuthUser;


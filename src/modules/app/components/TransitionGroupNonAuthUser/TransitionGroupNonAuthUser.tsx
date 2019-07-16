import React from 'react';
import { Route, Switch} from 'react-router-dom';
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import {LandingPage , AboutPage, ContactPage, ErrorPage, SignUpPage} from './Pages';
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
                      
                      <Route path={ROUTES.LANDING} component={LandingPage} exact  />

                      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />

                      <Route path="/about" component={AboutPage}  />

                      <Route path="/contact" component={ContactPage}  />

                      <Route component={ErrorPage}/>

                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
                )} 
          />
        
      </div>
    ) 
}

export default TransitionGroupNonAuthUser;


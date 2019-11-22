import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import {LandingPage , AboutPage, ContactPage, ErrorPage, SignUpPage, SignInPage} from './Pages';
import * as ROUTES from './constants/routes'
import './TransitionGroupNonAuthUser.scss';


//Order in <Routes> is important
interface Props  {
  vanish? : undefined | string;
}
 

const TransitionGroupNonAuthUser:React.FC<Props> = (props) => {

    
    return(
      <div className={props.vanish}> 
        <div className='page'>

        <Route 
// tslint:disable-next-line: jsx-no-multiline-js
              render={({location}) => (
                <TransitionGroup>

                
                  <CSSTransition timeout={300} classNames='fade' key={location.key}>
                    
                    <Switch location={location}>
                      
                      <Route path={ROUTES.LANDING} component={LandingPage} exact={true}  />

                      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />

                      <Route path={ROUTES.SIGN_IN} component={SignInPage} />

                      <Route path="/about" component={AboutPage}  />

                      <Route path="/contact" component={ContactPage}  />

                      <Redirect to='/' />

                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
                )} 
        />
          </div>
        
      </div>
    ) 
}

export default TransitionGroupNonAuthUser;


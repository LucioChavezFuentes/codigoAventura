import React from 'react';
import { Route, Switch} from 'react-router-dom';
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import Home from '../Routes/Home/Home';
import About from '../Routes/About/About';
import Contact from '../Routes/Contact/Contact';
import Error from '../Routes/Error/Error';
import './Body.scss';


const Body:React.FC = () => {
    
    return(
      <div>

      
        <Route 
// tslint:disable-next-line: jsx-no-multiline-js
              render={({location}) => (
                <TransitionGroup>

                
                  <CSSTransition timeout={300} classNames='fade' key={location.key}>
                    
                    <Switch location={location}>
                      
                      <Route path="/" component={Home} exact  />

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

export default Body;


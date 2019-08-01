import React from 'react';
import  { AuthUserContext, withAuthentication}  from '../firebaseApp';
import './App.scss';

import TransitionGroupNonAuthUser from './components/TransitionGroupNonAuthUser/TransitionGroupNonAuthUser';
import RouterGroupAuthUser from './components/RouterGroupAuthUser/RouterGroupAuthUser';

interface appProps  {
  vanish: string
  
} 


const App: React.FC = (props: any) => {  

  
  
    return (
      <div className="App">
        
          
            <AuthUserContext.Consumer>
             {authUser => authUser ? <RouterGroupAuthUser/> : <TransitionGroupNonAuthUser vanish={props.vanish} />}  
            </AuthUserContext.Consumer>
            
          
    
      </div>
    );
}

export default withAuthentication(App); 

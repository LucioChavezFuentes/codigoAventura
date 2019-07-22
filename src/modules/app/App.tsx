import React, {useState, useEffect} from 'react';
import Firebase, {withFirebase, AuthUserContext}  from '../firebaseApp';
import './App.scss';
import {BrowserRouter, RouteComponentProps } from 'react-router-dom';

import TransitionGroupNonAuthUser from './components/TransitionGroupNonAuthUser/TransitionGroupNonAuthUser';
import RouterGroupAuthUser from './components/RouterGroupAuthUser/RouterGroupAuthUser';

interface appProps extends RouteComponentProps {
  Firebase: Firebase | null
  authUser: firebase.User
}


const App: React.FC<appProps> = (props) => {

  

  const [authUser , setAuthUser] = useState<firebase.User|null>(null);

  useEffect (() => {
    const listener = props.Firebase!.auth.onAuthStateChanged((authUser)  => {
      if(authUser) {
        
        setAuthUser(authUser)
      }  else{
        setAuthUser(null)
      } 
    })
    
    return () => {
      listener();
    }

  }); 

  return (
    <div className="App">
      <AuthUserContext.Provider value={authUser}>
        <BrowserRouter>
          {authUser ?   <RouterGroupAuthUser/> : <TransitionGroupNonAuthUser/>  }
        </BrowserRouter>
    
      </AuthUserContext.Provider>
      
    </div>
  );
}

export default withFirebase(App); 

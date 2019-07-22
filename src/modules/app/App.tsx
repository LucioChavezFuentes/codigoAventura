import React, {useState, useEffect} from 'react';
import Firebase, {withFirebase} from '../firebaseApp';
import './App.scss';
import {BrowserRouter } from 'react-router-dom';

import TransitionGroupNonAuthUser from './components/TransitionGroupNonAuthUser/TransitionGroupNonAuthUser'

interface appProps {
  Firebase: Firebase | null
  authUser: firebase.User
}


const App: React.FC<appProps> = (props) => {

  

  const [authUser , setAuthUser] = useState<firebase.User|null>(null);

  useEffect (() => {
    const listener = props.Firebase!.auth.onAuthStateChanged((authUser)  => {
      authUser ? setAuthUser(authUser) : setAuthUser(null)
    })
    
    return () => {
      listener();
    }

  }); 

  return (
    <div className="App">
      <BrowserRouter>
        {}
        <TransitionGroupNonAuthUser/>
        
      </BrowserRouter>
      
    </div>
  );
}

export default withFirebase(App); 

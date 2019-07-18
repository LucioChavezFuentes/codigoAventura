import React from 'react';

import './App.scss';
import {BrowserRouter } from 'react-router-dom';

import TransitionGroupNonAuthUser from './components/TransitionGroupNonAuthUser/TransitionGroupNonAuthUser'

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        
        <TransitionGroupNonAuthUser/>
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;

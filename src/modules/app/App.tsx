import React from 'react';

import './App.scss';
import {BrowserRouter } from 'react-router-dom';
import Header from './components/utils/Header/Header';
import Body from './components/Transition Group/Body'

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        
        <Body/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

import React from 'react';

import './App.css';
import {BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Body from './components/Body/Body'

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header inCourse={true} />
        <Body/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

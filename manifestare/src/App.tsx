import React from 'react';
import logo from './logo.svg';
import './App.css';
import Typed from 'react-typed';
import Quote from './Engine/engine';
import { Routes, Route} from "react-router-dom";

function App(this: any) {
  return (
    <div>
    <p className='text'>Por que?</p>
    <div className='App'>
    <Routes>
      <Route path="/" element={<Quote />} />
    </Routes>
    </div>
    </div>
    
  );
}

export default App;

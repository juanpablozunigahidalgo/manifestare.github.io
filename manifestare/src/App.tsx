import React from 'react';
import logo from './logo.svg';
import './App.css';
import Typed from 'react-typed';
import Quote from './Engine/engine';

function App(this: any) {
  return (
    <div className="App">
      <Quote></Quote>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.scss';
import MenuItem from './components/menu/index';

const itemsList=[
  {
    icon: 'face',
    text: 'Face',
    address: 'face'
  },
  {
    icon: 'android',
    text: 'Android',
    address: 'android'
  },
];

function App() {
  return (
    <div className="App">
      <Router>
        <MenuItem itemsList={itemsList}/>
      </Router>
    </div>
  );
}

export default App;

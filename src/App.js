import React from 'react';
import './App.scss';
import MenuItem from './components/menu/index';

const itemsList=[
  {
    icon: 'face',
    text: 'Mune item'
  },
  {
    icon: 'face',
    text: 'Mune item'
  },
];

function App() {
  return (
    <div className="App">
        <MenuItem itemsList={itemsList}/>
    </div>
  );
}

export default App;

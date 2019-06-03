import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.scss';
import MenuItem from './components/menu/index';
import SecondMenu from './components/secondMenu/index';
import Button from './components/button/index';

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
        <MenuItem itemsList={itemsList} />
        <SecondMenu itemsList={itemsList} />
        <div style={{ margin: '20px' }}>
          <Button appearance={['primary']} />
          <Button appearance={['outline', 'primary']} />
          <Button appearance={['success']} />
          <Button appearance={['outline', 'success']} />
          <Button appearance={['warning']} />
          <Button appearance={['outline', 'warning']} />
          <Button appearance={['danger']} />
          <Button appearance={['outline', 'danger']} />
          <Button appearance={['info']} />
          <Button appearance={['outline', 'info']} />
          <Button appearance={[]} />
          <Button appearance={['outline']} />
        </div>
      </Router>
    </div>
  );
}

export default App;

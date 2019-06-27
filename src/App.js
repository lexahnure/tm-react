import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.scss';
import MenuItem from './components/menu/index';
import SecondMenu from './components/secondMenu/index';
import Button from './components/button/index';
import Dropdown from './components/dropdown/index';

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
          <div>
            <h2>Buttons</h2>
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
            <Button />
            <Button appearance={['outline']} />
            <Button appearance={['ghost', 'outline']} />
            <Button icon={'arrow_back'} />
            <Button iconAfter={'arrow_forward'} />
          </div>
          <div>
            <h2>Dropdown</h2>
            <Dropdown>
              <p className="list-title">Group title</p>
              <ul>
                <li>Some text here</li>
                <li>Next text line</li>
              </ul>
            </Dropdown>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import logo from '../../images/logo.png'
import './menu.scss';

class MenuItem extends React.Component {

  render() {
    const { itemsList } = this.props;
    return (
      <div className="menu">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul>
          {
            itemsList && itemsList.map((item, index) => {
              return  (
                <li className="menu-item" key={index}>
                  <i className="material-icons">{ item.icon || 'android' }</i>
                  <span>{ item.text || 'Some text here' }</span>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

export default MenuItem;
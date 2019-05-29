import React from 'react';
import { NavLink } from 'react-router-dom';
import './secondMenu.scss';

class SecondMenu extends React.Component {

  render () {
    const { itemsList } = this.props;  

    return (
      <div className="second-menu">
        <h2>Second Menu</h2>
        <ul>
          {
            itemsList && itemsList.map((item, index) => {
              return (
                <li key={index} className="menu-item">
                  <NavLink to={`${item.address}`}>
                    <span>{item.text}</span>
                  </NavLink>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default SecondMenu;

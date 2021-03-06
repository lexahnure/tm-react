import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import './menu.scss';

class MenuItem extends React.Component {
  state = {
    minimized: false,
  }

  minimizeHandler = () => {
    this.setState({ minimized: !this.state.minimized });
  }

  render() {
    const { itemsList } = this.props;
    const { minimized } = this.state;

    return (
      <div className={ minimized ? 'menu minimized' : 'menu' }>
        <div className="logo">
          <span>
            <img src={logo} alt="logo" />
          </span>
        </div>
        <button type="button" className="btn btn-ghost btn-icon btn-round minimize" onClick={this.minimizeHandler}>
          <i className="material-icons">{ minimized ? 'chevron_right' : 'chevron_left' }</i>
        </button>
        <div className="control-buttons">
          <button type="button" className="btn btn-start">
            <i className="material-icons">play_arrow</i>
            <span>Start</span>
          </button>
          <button type="button" className="btn btn-stop" disabled={true}>
            <i className="material-icons">stop</i>
            <span>Stop</span>
          </button>
        </div>
        <ul>
          {
            itemsList && itemsList.map((item, index) => {
              return  (
                <li className="menu-item" key={index}>
                  <NavLink to={`/${item.address}`}>
                    <i className="material-icons">{ item.icon || 'android' }</i>
                    <span>{item.text}</span>
                  </NavLink>
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
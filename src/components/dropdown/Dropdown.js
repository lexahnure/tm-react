import React from 'react';
import Button from './../button/index';

import './dropdown.scss';

class Dropdown extends React.Component {

  state = {
    isOpened: false
  }

  componentDidMount () {
    this.handleClickOut();
  }

  handleClickOut = () => {
    document.onclick = event => {
      if(this.dropdown && event.target.contains(this.dropdown)) {
        this.setState({ isOpened: false });        
      }
    }
  }

  handleClick = () => {
    const { isOpened } = this.state;
    
    this.setState({ isOpened: !isOpened });
  }

  render() {
    const { children } = this.props;
    const { isOpened } = this.state;

    return (
      <div className="dropdown" ref={ el => this.dropdown = el }>
        <Button text='Push me' iconAfter={isOpened ? 'arrow_drop_up' : 'arrow_drop_down'} click={ this.handleClick } />
        {
          <div className={`dropdown-menu ${isOpened ? 'shown' : ''}`}>
            { children }
          </div>
        }
      </div>
    )
  }
}

export default Dropdown;

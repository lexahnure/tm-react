import React from 'react';

import './button.scss';

class Button extends React.Component {

  getClass = () => {
    const { appearance } = this.props;

    if (appearance) {
      return (
        appearance.includes('primary') ? 'primary'
      : appearance.includes('success') ? 'success'
      : appearance.includes('warning') ? 'warning'
      : appearance.includes('danger') ? 'danger'
      : appearance.includes('info') ? 'info'
      : appearance.includes('ghost') ? 'ghost'
      : ''
      );
    }
    return '';
  }

  isOutline = () => {
    const { appearance } = this.props;
    if (appearance && appearance.includes('outline')) {
      return 'outline';
    }
    return '';
  }

  hasAnIcon = () => {
    const { icon } = this.props;

    if (icon) {
      return  (
        <i className="material-icons before">{ icon }</i>
      );
    }
  }

  hasAnIconAfter = () => {
    const { iconAfter } = this.props;

    if (iconAfter) {
      return  (
        <i className="material-icons after">{ iconAfter }</i>
      );
    }
  }

  handleClick = () => {
    const { click } = this.props;

    if (click) {
      return  click();
    }
  }

  render() {
    const { text } = this.props;

    return (
      <button type="button" className={`button ${this.getClass()} ${this.isOutline()}`} onClick={() => this.handleClick()}>
        { this.hasAnIcon() }
        { text ? text : 'Button' }
        { this.hasAnIconAfter() }
      </button>
    )
  }
}

export default Button;

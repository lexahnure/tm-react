import React from 'react';

import './button.scss';

class Button extends React.Component {

  getClass = () => {
    const { appearance } = this.props;
    if (appearance.includes('outline')) {
      return (
        appearance.includes('primary') ? 'primary-outline'
      : appearance.includes('success') ? 'success-outline'
      : appearance.includes('warning') ? 'warning-outline'
      : appearance.includes('danger') ? 'danger-outline'
      : appearance.includes('info') ? 'info-outline'
      : 'secondary-outline'
      )
    }

    if (!appearance.includes('outline')) {
      return (
        appearance.includes('primary') ? 'primary'
      : appearance.includes('success') ? 'success'
      : appearance.includes('warning') ? 'warning'
      : appearance.includes('danger') ? 'danger'
      : appearance.includes('info') ? 'info'
      : 'secondary'
      )
    }
  }

  render() {
    const { text } = this.props;

    return (
      <button type="button" className={`button ${this.getClass()}`}>
        { text ? text : 'Button' }
      </button>
    )
  }
}

export default Button;

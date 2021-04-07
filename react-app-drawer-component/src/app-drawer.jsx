import React from 'react';

export default class Drawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { toggle: false };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    if (this.state.toggle) {
      this.setState({ toggle: false });
    } else {
      this.setState({ toggle: true });
    }
  }

  render() {
    return (
      <div className="container">
        <i className="fas fa-bars" onClick={this.handleToggle}></i>
        <div className={this.state.toggle ? 'modal' : 'modal hidden'} onClick={this.handleToggle}>
          <div className="drawer">
            <h2>Menu</h2>
            <p>About</p>
            <p>Get Started</p>
            <p>Sign-In</p>
          </div>
        </div>
      </div>
    );
  }
}

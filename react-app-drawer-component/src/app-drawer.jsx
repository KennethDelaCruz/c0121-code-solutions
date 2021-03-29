import React from 'react';

export default class Drawer extends React.Component {

  render() {
    return (
      <div className="container">
        <i className="fas fa-bars"></i>
        <div className="modal">
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

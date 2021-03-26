import React from 'react';

export default class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0, toggle: false };
    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);

  }

  handleClick() {
    if (this.state.toggle) {
      this.setState({ toggle: false });
      clearInterval(this.timer);
    } else {
      this.setState({ toggle: true });
      this.timer = setInterval(() => {
        this.setState({ seconds: this.state.seconds + 1 });
      }, 1000);
    }

  }

  handleReset() {
    if (!this.state.toggle) {
      this.setState({ seconds: 0 });
    }
  }

  render() {
    if (!this.state.toggle) {
      return (
        <div className="container">
          <div className="Timer" onClick={this.handleReset}>{this.state.seconds}</div>
          <i className="fas fa-play" onClick={this.handleClick}></i>
        </div>
      );
    } else {
      return (
        <div className="container">
          <div className="Timer" onClick={this.handleReset}>{this.state.seconds}</div>
          <i className="fas fa-pause" onClick={this.handleClick}></i>
        </div>
      );
    }
  }
}

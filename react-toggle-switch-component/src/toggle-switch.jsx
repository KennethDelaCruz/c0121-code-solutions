import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Toggle: false };
    this.handleSwitchOn = this.handleSwitchOn.bind(this);
    this.handleSwitchOff = this.handleSwitchOff.bind(this);
  }

  handleSwitchOn() {
    this.setState({ Toggle: true });
  }

  handleSwitchOff() {
    this.setState({ Toggle: false });
  }

  render() {
    if (!this.state.Toggle) {
      return (
        <div className="switchOff" onClick={this.handleSwitchOn}>
          <span className="sliderOff">Off</span>
        </div>
      );
    } else {
      return (
        <div className="switchOn" onClick={this.handleSwitchOff}>
          <span className="sliderOn">On</span>
        </div>
      );
    }
  }
}

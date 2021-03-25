import React from 'react';

export default class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
    this.handleClicks = this.handleClicks.bind(this);
  }

  handleClicks() {
    const increment = 1;
    this.setState({ clicks: this.state.clicks + increment });
  }

  render() {
    if (this.state.clicks <= 3) {
      return <button className="one" onClick={this.handleClicks}>{this.props.text}: {this.state.clicks}</button>;
    } else if (this.state.clicks > 3 && this.state.clicks <= 6) {
      return <button className="two" onClick={this.handleClicks}>{this.props.text}: {this.state.clicks}</button>;
    } else if (this.state.clicks > 6 && this.state.clicks <= 9) {
      return <button className="three" onClick={this.handleClicks}>{this.props.text}: {this.state.clicks}</button>;
    } else if (this.state.clicks > 9 && this.state.clicks <= 12) {
      return <button className="four" onClick={this.handleClicks}>{this.props.text}: {this.state.clicks}</button>;
    } else if (this.state.clicks > 12 && this.state.clicks <= 15) {
      return <button className="five" onClick={this.handleClicks}>{this.props.text}: {this.state.clicks}</button>;
    } else if (this.state.clicks > 15) {
      return <button className="six" onClick={this.handleClicks}>{this.props.text}: {this.state.clicks}</button>;
    }

  }
}

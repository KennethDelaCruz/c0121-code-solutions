import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isClicked: false };
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  render() {

    if (!this.state.isClicked) {
      return <button onClick={this.handleClick}>{this.props.text}</button>;
    } else {
      return <button>Thank You!</button>;
    }

  }
}

const element = (
  <CustomButton text="Click Me!" />
);

ReactDOM.render(
  element,
  document.querySelector('#root')
);

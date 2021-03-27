import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { view: null };
  }

  handleClick(e) {
    const value = e.target.getAttribute('view');
    console.log(typeof value);
    this.setState({ view: value });

  }

  render() {

    const element = this.props.info.map(object => {
      const test = (this.state.view === object.name ? 'description' : 'description hidden');

      return (
        <div key={object.name}>
          <div onClick={this.handleClick} view={object.language}className="language">{object.name}</div>
          <div className={test}>{object.description}</div>
        </div>
      );
    });
    return element;
  }

}

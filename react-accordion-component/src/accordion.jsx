import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: null };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(i) {
    if (this.state.selected === i) {
      this.setState({ selected: null });
    } else {
      this.setState({ selected: i });
    }

  }

  render() {
    const selected = this.state.selected;
    return (
      <div className="accordion">
        {this.props.info.map((object, i) => {
          return (
            <>
              <div className="item" onClick={() => this.handleClick(i)}>{object.name}</div>
              <div className={selected === i ? 'description' : 'hidden description'}>{object.description}</div>
            </>
          );
        })}
      </div>
    );
  }
}

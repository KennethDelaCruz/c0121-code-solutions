import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: 0 };
    this.handleRight = this.handleRight.bind(this);
    this.handleLeft = this.handleLeft.bind(this);
    this.handleDots = this.handleDots.bind(this);
    this.length = this.props.gallery.length;

  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.selected === (this.length - 1)) {
        this.setState({ selected: 0 });
      } else {
        this.setState({ selected: this.state.selected + 1 });
      }
    }, 5000);
  }

  handleRight() {
    if (this.state.selected === (this.length - 1)) {
      this.setState({ selected: 0 });
    } else {
      this.setState({ selected: this.state.selected + 1 });
    }
  }

  handleLeft() {
    if (this.state.selected === 0) {
      this.setState({ selected: this.length - 1 });
    } else {
      this.setState({ selected: this.state.selected - 1 });
    }
  }

  handleDots(i) {
    this.setState({ selected: i });
  }

  render() {
    const selected = this.state.selected;
    const index = this.props.gallery[selected];
    const dots = this.props.gallery.map((element, i) => {
      if (i === this.state.selected) {
        return <i key={i} onClick={() => this.handleDots(i)} className="fas fa-circle"></i>;
      } else { return <i key={i} onClick={() => this.handleDots(i)} className="far fa-circle"></i>; }
    });
    return (
      <div className="carousel">
        <i className="fas fa-angle-left" onClick={this.handleLeft}></i>
        <div className="image-section">
          <img className="pokemon" src={index}></img>
          <div className="dots">
            {dots}
          </div>
        </div>
        <i className="fas fa-chevron-right" onClick={this.handleRight}></i>
      </div>
    );
  }
}

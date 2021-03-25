import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 , jump: 1};
    this.handleIncrementClick = this.handleIncrementClick.bind(this);
    this.handleDecrementClick = this.handleDecrementClick.bind(this);
  }

  handleIncrementClick() {
    this.setState(state => ({ count: state.count + state.jump }));
  }
  handleDecrementClick() {
    this.setState(state => ({ count: state.count - state.jump }));
  }

  render() {
    return (
      <div className="Counter">
        <p className="Counter-Count">You clicked {this.state.count} times</p>
        <button className="Counter-Button Counter-Increment" onClick={this.handleIncrementClick}>
          Increment
        </button>
        <button className="Counter-Button Counter-Decrement" onClick={this.handleDecrementClick}>
          Decrement
        </button>
      </div>
    );
  }
}

export default Counter;
import React, { Component, PropTypes } from 'react';
import { ENTER_KEY } from '../constants';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleKeyDown(e) {
    const text = e.target.value.trim();
    if (text && e.which === ENTER_KEY) {
      this.setState({ text: '' });
      this.props.handleSubmit(text);
    }
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <header className="header">
        <h1>Todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={this.state.text}
          onKeyDown={this.handleKeyDown}
          onChange={this.handleChange}
        />
      </header>
    );
  }
}

Header.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default Header;

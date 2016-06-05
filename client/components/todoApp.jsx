import React, { Component } from 'react';
import Header from './header.jsx';
import Item from './item.jsx';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }
  render() {
    return (
      <main className="todoapp">
        <Header />
        <ul className="todo-list">
          <Item
            todo={{ title: 'title todo' }}
            completed={false}
            editing={false}
          />
        </ul>
      </main>
    );
  }
}

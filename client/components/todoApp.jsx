import React, { Component } from 'react';
import Header from './header.jsx';
import Item from './item.jsx';
import { API_URL } from '../constants';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(newTodoTitle) {
    const newTodo = {
      title: newTodoTitle,
    };
    fetch(API_URL, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(newTodo),
    })
    .then(response => response.json())
    .then((todo) => {
      this.setState({
        todos: [...this.state.todos, todo],
      });
    })
    .catch(err => {
      throw err;
    });
  }
  render() {
    console.log(this.state);
    return (
      <main className="todoapp">
        <Header handleSubmit={this.handleSubmit} />
        <ul className="todo-list">
          {
            this.state.todos.map((todo, key) => (
              <Item
                todo={todo}
                editing={false}
                key={key}
              />
            ))
          }
        </ul>
      </main>
    );
  }
}

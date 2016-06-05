import React, { Component } from 'react';
import Header from './header.jsx';
import Item from './item.jsx';

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
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
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

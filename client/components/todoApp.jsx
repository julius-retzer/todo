import React, { Component } from 'react';
import Header from './header.jsx';
import Item from './item.jsx';
import { API_URL, JSON_CONTENT_TYPE } from '../constants';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch(API_URL, {
      method: 'GET',
      headers: JSON_CONTENT_TYPE,
    })
    .then(response => response.json())
    .then(todos => {
      this.setState({
        todos,
      });
    })
    .catch(err => {
      throw err;
    });
  }

  handleSubmit(newTodoTitle) {
    const newTodo = {
      title: newTodoTitle,
    };
    fetch(API_URL, {
      method: 'POST',
      headers: JSON_CONTENT_TYPE,
      body: JSON.stringify(newTodo),
    })
    .then(response => response.json())
    .then(todo => {
      this.setState({
        todos: [...this.state.todos, todo],
      });
    })
    .catch(err => {
      throw err;
    });
  }

  render() {
    console.log(this.state.todos);
    return (
      <main className="todoapp">
        <Header handleSubmit={this.handleSubmit} />
        <ul className="todo-list">
          {
            this.state.todos.map((todo, key) => (
              <Item
                todo={todo}
                key={key}
              />
            ))
          }
        </ul>
      </main>
    );
  }
}

import React from 'react';
import classNames from 'classnames';

const TodoItem = ({ todo, handleComplete, handleDelete }) => {
  return (
    <li className={classNames({ completed: todo.completed })}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleComplete(todo)}
        />
        <label>
          {todo.title}
        </label>
        <button className="destroy" onClick={() => handleDelete(todo)}/>
      </div>
      <input
        className="edit"
      />
    </li>
  );
};

export default TodoItem;

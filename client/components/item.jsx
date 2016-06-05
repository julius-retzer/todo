import React from 'react';
import classNames from 'classnames';

const TodoItem = ({todo, completed, editing}) => {
  return (
    <li className={classNames({
          completed: completed,
          editing: editing
        })}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
        />
      <label>
          {todo.title}
        </label>
        <button className="destroy"/>
      </div>
      <input
        className="edit"
      />
    </li>
  );
};

export default TodoItem;

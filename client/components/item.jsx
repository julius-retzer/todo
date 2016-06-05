import React from 'react';
import classNames from 'classnames';

const TodoItem = ({todo, editing}) => {
  console.log(todo);
  return (
    <li className={classNames({
          completed: todo.completed,
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

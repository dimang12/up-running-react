import React from "react";
import './TodoListItem.css';

const TodoListItem = ({todo}) => (
    <div className="todo-item-container">
        <h3>
            {todo.text}
        </h3>
        <div className="button-container">
            <button className="complete-button">Mark As Complete</button>
            <button className="remove-button">Remove</button>
        </div>
    </div>
);

export default TodoListItem;
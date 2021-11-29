import React from "react";
import TodoListItem from "./TodoListItem";
import './TodoList.css';
import NewTodoForm from "./NewTodoForm";

const TodoList = ({todos = [{text: 'Hello Dimang!'}]}) => (
    <div className="list-wrapper">
        <NewTodoForm />
        {todos.map(todo => <TodoListItem todo={todo} />)}
    </div>
);

export default TodoList;
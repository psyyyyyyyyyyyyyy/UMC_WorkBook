import React from "react";
import { Link } from "react-router-dom";
import TodoItem from "./TodoItem";
import styles from "../todoList.module.css";

const TodoList = ({ todos, patchTodoMutation, deleteTodoMutation }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Link to={`/todo/${todo.id}`} key={todo.id} className={styles.link}>
          <TodoItem
            todo={todo}
            patchTodoMutation={patchTodoMutation}
            deleteTodoMutation={deleteTodoMutation}
          />
        </Link>
      ))}
    </div>
  );
};

export default TodoList;

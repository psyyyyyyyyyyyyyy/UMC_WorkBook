import React, { useState } from "react";
import styles from "../todoList.module.css";

const TodoItem = ({ todo, patchTodoMutation, deleteTodoMutation }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(todo.title);
  const [updatedContent, setUpdatedContent] = useState(todo.content);

  const handleCheckChange = (e) => {
    e.stopPropagation();
    patchTodoMutation({
      id: todo.id,
      checked: e.target.checked,
      title: todo.title,
      content: todo.content,
    });
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    deleteTodoMutation({ id: todo.id });
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    if (isEditing) {
      patchTodoMutation({
        id: todo.id,
        checked: todo.checked,
        title: updatedTitle,
        content: updatedContent,
      });
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className={styles["todo-item"]}>
      <input
        type="checkbox"
        checked={todo.checked}
        onChange={handleCheckChange}
      />
      {isEditing ? (
        <>
          <input
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
            className={styles.input}
          />
          <input
            type="text"
            value={updatedContent}
            onChange={(e) => setUpdatedContent(e.target.value)}
            className={styles.input}
          />
        </>
      ) : (
        <>
          <p>{todo.title}</p>
          <p>{todo.content}</p>
        </>
      )}
       <button onClick={handleEdit}>
        {isEditing ? "완료" : "수정하기"}
      </button>
      <button onClick={handleDelete}>삭제하기</button>
    </div>
  );
};

export default TodoItem;

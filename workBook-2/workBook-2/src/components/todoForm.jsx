import React, { useState } from "react";
import styles from "../todoList.module.css";

const TodoForm = ({ postTodoMutation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      alert("제목과 내용을 입력해주세요.");
      return;
    }
    postTodoMutation({ title, content });
    setTitle("");
    setContent("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        value={title}
        placeholder="제목을 입력해주세요."
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className={styles.input}
        type="text"
        value={content}
        placeholder="내용을 입력해주세요."
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">할 일 등록</button>
    </form>
  );
};

export default TodoForm;

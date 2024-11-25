import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getTodo } from "../apis/todo";
import styles from "../todoList.module.css";

const TodoDetail = ({ patchTodoMutation, deleteTodoMutation }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: todo, isLoading, isError } = useQuery({
    queryFn: () => getTodo({ id }),
    queryKey: ["todo", id],
  });

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (todo) {
      setTitle(todo.title);
      setContent(todo.content);
    }
  }, [todo]);

  const handleSave = () => {
    patchTodoMutation(
      { id, title, content, checked: todo.checked },
      {
        onSuccess: () => navigate("/"),
      }
    );
  };

  const handleDelete = () => {
    deleteTodoMutation(
      { id },
      {
        onSuccess: () => navigate("/"),
      }
    );
  };

  if (isLoading) return <div className={styles.loading}>로딩 중입니다...</div>;
  if (isError) return <div className={styles.error}>에러가 발생했습니다.</div>;

  return (
    <div className={styles.detail}>
      <h2>상세 목록</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={styles.input}
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className={styles.textarea}
      />
      <div className={styles.buttons}>
        <button onClick={handleSave}>저장</button>
        <button onClick={handleDelete}>삭제</button>
        <button onClick={() => navigate("/")}>뒤로가기</button>
      </div>
    </div>
  );
};

export default TodoDetail;

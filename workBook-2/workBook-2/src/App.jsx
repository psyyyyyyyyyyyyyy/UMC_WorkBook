import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";
import { getTodoList, postTodo, patchTodo, deleteTodo } from "./apis/todo";
import TodoForm from "./components/todoForm";
import TodoList from "./components/TodoList";
import TodoDetail from "./components/todoDetail";
import { queryClient } from "./main";
import styles from "./todoList.module.css";

const App = () => {
  const [search, setSearch] = useState("");

  const { data: todos, isLoading, isError } = useQuery({
    queryFn: () => getTodoList({ title: search }),
    queryKey: ["todos", search],
  });

  const { mutate: postTodoMutation } = useMutation({
    mutationFn: postTodo,
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });

  const { mutate: patchTodoMutation } = useMutation({
    mutationFn: patchTodo,
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });

  const { mutate: deleteTodoMutation } = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });

  return (
    <Router>
      <div className={styles.container}>
        <h1>검색</h1>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.input}
        />
        <TodoForm postTodoMutation={postTodoMutation} />
        {isLoading ? (
          <div className={styles.loading}>로딩 중입니다...</div>
        ) : isError ? (
          <div className={styles.error}>에러가 발생했습니다.</div>
        ) : (
          <Routes>
            <Route
              path="/"
              element={
                <TodoList
                  todos={todos[0]}
                  patchTodoMutation={patchTodoMutation}
                  deleteTodoMutation={deleteTodoMutation}
                />
              }
            />
            <Route
              path="/todo/:id"
              element={
                <TodoDetail
                  patchTodoMutation={patchTodoMutation}
                  deleteTodoMutation={deleteTodoMutation}
                />
              }
            />
          </Routes>
        )}
      </div>
    </Router>
  );
};

export default App;

import { useState } from 'react';
import './App.css';
import styles from './todoList.module.css';

// Input 컴포넌트
function Input({ value, onChange }) {
  return (
    <input
      className={styles.input}
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

// Button 컴포넌트
function Button({ onClick, children, type = "button" }) {
  return (
    <button onClick={onClick} type={type} className={styles.button}>
      {children}
    </button>
  );
}

function App() {
  const [todos, setTodos] = useState([
    { id: 1, task: '투두 만들어보기' },
    { id: 2, task: '박성연' },
  ]);

  const [text, setText] = useState('');
  const [editingId, setEditingId] = useState('');
  const [editText, setEditText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // 1. 추가하기
  const addTodo = () => {
    setTodos((prev) => [
      ...prev,
      { id: Math.floor(Math.random() * 100) + 2, task: text },
    ]);
    setText('');
  };

  // 2. 삭제하기
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  // 3. 수정하기
  const updateTodo = (id, text) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, task: text } : item))
    );
    setEditingId('');
  };

  return (
      <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <Input value={text} onChange={setText} />
        <Button onClick={addTodo} type="submit">
          할 일 등록
        </Button>
      </form>
      <div>
        {todos.map((todo) => (
          <div key={todo.id} className={styles.todoItem}>
            {editingId !== todo.id && (
              <div className={styles.todoTask}>
                <p>{todo.task}</p>
              </div>
            )}
            {editingId === todo.id && (
              <Input value={editText} onChange={setEditText} />
            )}
            <div className={styles.todoActions}>
              <Button onClick={() => deleteTodo(todo.id)} className={styles.buttonDelete}>
                삭제하기
              </Button>
              {editingId === todo.id ? (
                <Button onClick={() => updateTodo(editingId, editText)}>
                  수정 완료
                </Button>
              ) : (
                <Button onClick={() => setEditingId(todo.id)}>
                  수정 진행
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

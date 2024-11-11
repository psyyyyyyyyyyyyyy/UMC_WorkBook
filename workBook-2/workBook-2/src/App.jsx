import { useContext } from 'react';
import './App.css';
import styles from './todoList.module.css';
import { TodoContext } from './context/TodoContext';

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
  const {
    todos,
    text,
    setText,
    editingId,
    setEditingId,
    editText,
    setEditText,
    handleSubmit,
    addTodo,
    deleteTodo,
    updateTodo,
  } = useContext(TodoContext);

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

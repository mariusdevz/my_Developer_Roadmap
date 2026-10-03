import { useRef, useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  const handleSubmit = () => {
    setTodos((todo) => {
      return todo.concat({
        id: Math.floor(Math.random() * 100),
        text: input,
        completed: false,
      });
    });
    setInput("");
    inputRef.current.focus();
  };

  const deleteTodo = (id) => {
    setTodos((todo) => todo.filter((t) => t.id !== id));
  };

  const toggleTodo = () => {
    return todos.map((todo) => {
      [...todo, todo.completed ? !todo.completed : todo];
      return todo;
    });
  };
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        ref={inputRef}
      />
      <button onClick={handleSubmit}>Add</button>

      <ul>
        {todos.map(({ text, id }) => (
          <li key={id}>
            <span>{text}</span>
            <input type="checkbox" onClick={() => toggleTodo(id)} />
            <button onClick={() => deleteTodo(id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

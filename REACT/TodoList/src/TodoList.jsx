import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleTodos = () => {
    const text = input.trim();
    if (text === "") return;
    setTodos((todo) => {
      return todo.concat({
        id: Date.now(),
        text: text,
        completed: false,
      });
    });
    setInput("");
  };

  const deleteTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const completedTodo = (id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  return (
    <div style={{ background: "teal", padding: "15px", width: "400px" }}>
      <h2 style={{ color: "#fff", fontFamily: "sans-serif" }}>TodoList</h2>
      <input
        type="text"
        placeholder="Enter item"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleTodos}>Add</button>

      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "0",
        }}
      >
        {todos.map(({ text, id, completed }) => {
          return (
            <li
              key={id}
              style={{
                background: "aliceblue",
                display: "flex",
                alignItems: "center",
                padding: "10px",
                gap: "8px",
                margin: "5px 0",
              }}
            >
              <span
                style={{
                  textDecoration: completed ? "line-through 2px solid" : "none",
                }}
              >
                {text}
              </span>
              <input
                type="checkbox"
                checked={completed}
                onChange={() => completedTodo(id)}
              />
              <button
                style={{ background: "red", color: "#fff" }}
                onClick={() => deleteTodo(id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;

//import React from 'react'
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Button from "../components/Button";
interface Todo {
  id: number;
  text: string;
}
const Main = () => {
  let navigate = useNavigate();
  const [text, setText] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [nextId, setNextId] = useState<number>(1);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };
  const setTasks = () => {
    if (text.trim()) {
      setTodos([...todos, { id: nextId, text: text }]);
      setNextId(nextId + 1);
      setText("");
    }
  };
  const handleRemoveTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="contaimer mt-5">
      <h1>THIS IS THE MAIN PAGE!</h1>
      <div className="container">
        <div className="label">
          To do List
          <button
            onClick={setTasks}
            style={{
              display: "block",
              marginTop: "10px",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            Add task
          </button>
        </div>
        <ul className="todo-list">
          <div className="list-group">
            <textarea
              value={text}
              onChange={handleChange}
              placeholder="Type here..."
              style={{ width: "100%", padding: "10px", borderRadius: "5px" }}
            />
          </div>
          <div
            style={{
              marginTop: "20px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              minHeight: "50px",
            }}
          >
            <ul style={{ listStyleType: "none", padding: "0" }}>
              {todos.map((todo) => (
                <li
                  key={todo.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "5px",
                  }}
                >
                  {todo.text}
                  <button
                    onClick={() => handleRemoveTodo(todo.id)}
                    style={{
                      marginLeft: "10px",
                      backgroundColor: "red",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      padding: "5px",
                    }}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </ul>
      </div>

      <button
        onClick={() => navigate("/")}
        className="btn btn-outline-primary mt-3"
      >
        Go Back
      </button>
    </div>
  );
};

export default Main;

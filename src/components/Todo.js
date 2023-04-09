import React from "react";
import { useState } from "react";

export function Todo() {

    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
  
    function handleAddTodo() {
      if (inputValue.trim() !== '') {
        setTodos([...todos, inputValue]);
        setInputValue('');
      }
    }
  
    function handleDeleteTodo(index) {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    }
  
    return (
      <div className=" container relative w-1/4 h-1/2 bg-amber-300">
      <div>
        <h1>Todo App</h1>
        <div>
          <input
            type="text"
            placeholder="Add a todo"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <button onClick={handleAddTodo}>Add Todo</button>
        </div>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => handleDeleteTodo(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      </div>
    );
}
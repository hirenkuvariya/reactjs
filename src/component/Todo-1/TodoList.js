import React, { useState } from "react";

const TodoList = () => {
  // Load todos from localStorage or default to an empty array
  const initialTodos = JSON.parse(localStorage.getItem("todos")) || [];
  const [todos, setTodos] = useState(initialTodos);
  const [newTodo, setNewTodo] = useState("");

  const saveToLocalStorage = (updatedTodos) => {
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      const updatedTodos = [...todos, newTodo.trim()];
      setTodos(updatedTodos);
      saveToLocalStorage(updatedTodos);
      setNewTodo("");
    } else {
      alert("Please enter a value");
    }
  };

  const editTodo = (index) => {
    const updatedTodos = [...todos];
    const editedTodo = updatedTodos[index];

    const newValue = prompt("Edit Todo:", editedTodo);

    if (newValue !== null) {
      updatedTodos[index] = newValue.trim();
      setTodos(updatedTodos);
      saveToLocalStorage(updatedTodos);
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
    saveToLocalStorage(updatedTodos);
  };

  return (
    <div className="container-fluid p-5">
      <p className="text-dark text-center fs-1 fw-bold m-3">To-Do App</p>
      <div className="d-flex justify-content-center">
        <div className="input-group mb-3 w-25 ">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="form-control w-50"
            placeholder="Add Task"
          />
          <button
            className="btn btn-info"
            type="button"
            id="button-addon2"
            onClick={handleAddTodo}
          >
            Add-Todo
          </button>
        </div>
      </div>
      <div className="container mt-3">
        <table className="table table-info border-2 table-hover">
          <thead>
            <tr >
              <th  scope="col">No</th>
              <th scope="col">Task</th>
              <th scope="cpl">Edit/Remove</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{todo}</td>
                <td>
                  <button
                    className="btn text-light btn-warning me-2 btn-sm"
                    onClick={() => editTodo(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteTodo(index)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoList;

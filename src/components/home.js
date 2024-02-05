import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: newTodo }]);
      setNewTodo("");
    }
  };

  const editTodo = (id, newText) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="d-flex justify-content-center align-items-center text-light bg-byour">
      <div className="mb-5 pb-5">
        <h1 className="text-center">Todo List</h1>
        <div className="d-flex flex-column justify-content-center align-items-center gap-2">
          {/* Input Todo */}
          <div className="d-flex flex-row gap-1">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            />
            <button onClick={addTodo}>Add</button>
          </div>

          {/* Output Todo */}
          <div className="d-flex flex-column gap-1">
            {todos.map((todo) => (
              <div className="d-flex gap-1" key={todo.id}>
                <li>{todo.text}</li>
                <button
                  onClick={() =>
                    editTodo(todo.id, prompt("Edit Todo", todo.text))
                  }
                >
                  Edit
                </button>
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;

import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='ui container'>
      <h1>Todo List</h1>
      <TodoList />
    </div>
  );
}

export default App;

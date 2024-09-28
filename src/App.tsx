import React, { useState } from "react";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import { TodoType } from "./types";

const todosData = [
  {
    id: "1",
    title: "todo title 1",
  },
  {
    id: "2",
    title: "todo title 2",
  },
  {
    id: "3",
    title: "todo title 3",
  },
  {
    id: "4",
    title: "todo title 5",
  },
  {
    id: "5",
    title: "todo title 5",
  },
  {
    id: "6",
    title: "todo title 6",
  }
];

const App = () => {

  const [todos, setTodos] = useState(todosData);
  const handleDeleteTodo = (id: string) => {
    const filterTodos = todos.filter
    ((todo) => todo.id != id);
    setTodos(filterTodos);
  };

  const handleAddNewTodo = (newTodo: TodoType) => {
    setTodos(previousState => [...previousState, newTodo]);
  }
  return (
    <div>
    <AddTodo handleAddNewTodo = {handleAddNewTodo}/>
    <Todos todos={todos}
    handleDeleteTodo={handleDeleteTodo} />
  </div>
  );
};


export default App;
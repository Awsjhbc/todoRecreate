/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const DEFAULT_INPUT_VALUE = [
  { id: 1, description: "todo 1", checked: false },
  { id: 2, description: "todo 2", checked: false },
  {
    id: 3,
    description:
      "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer",
    checked: false,
  },
];

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(DEFAULT_INPUT_VALUE);
  const [editedTodo, setEditedTodo] = useState(null); //null

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        description: todo,
        checked: false,
      },
    ]);
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onChecked = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const cancelEditing = () => {
    setTodos(todos);
    setEditedTodo(null);
  };

  const handleEditTodoChange = (event) => {
    setEditedTodo(event.target.value);
  };

  const editTodoName = (description, id) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, description } : todo))
    );
    setEditedTodo(null);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        deleteTodo,
        onChecked,
        cancelEditing,
        handleEditTodoChange,
        editTodoName,
        editedTodo,
        setEditedTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);

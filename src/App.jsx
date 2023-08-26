import styles from "./App.module.css";
import rocketLogo from "./assets/rocketLogo.svg";
import AddTodoForm from "./components/AddTodoForm/AddTodoForm";
import boardIcon from "./assets/boardIcon.svg";
import TodoList from "./components/TodoList/TodoList";
import { useState } from "react";
import MyContext from "./utils/MyContext";

const DEFAULT_INPUT_VALUE = [
  { id: 1, description: "todo 1", checked: false, isEditing: false },
  { id: 2, description: "todo 2", checked: false, isEditing: false },
  {
    id: 3,
    description:
      "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer",
    checked: false,
    isEditing: false,
  },
];

const App = () => {
  const [todos, setTodos] = useState(DEFAULT_INPUT_VALUE);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        description: todo,
        checked: false,
        isEditing: false,
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

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editFormTodo = (description, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, description, isEditing: !todo.isEditing }
          : todo
      )
    );
  };

  return (
    <div className={styles.todoMain}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src={rocketLogo} />
          <p className={styles.leftLogo}>to</p>
          <p className={styles.rightLogo}>do</p>
        </div>
      </header>
      <MyContext.Provider value={{ todos, addTodo, deleteTodo }}>
        <AddTodoForm />
        <div className={styles.todoPanel}>
          <div className={styles.todoInfo}>
            <div className={styles.todoCreated}>
              <p className={styles.createdText}>Created todos</p>
              <p className={styles.createdCount}>{todos.length}</p>
            </div>
            <div className={styles.todoCompleted}>
              <p className={styles.completedText}>Completed todos</p>
              <p className={styles.createdCount}>0</p>
            </div>
          </div>
          <TodoList />
          {/* <div className={styles.todoEmpty}>
            <img src={boardIcon} className={styles.boardIcon} />
            <p className={styles.emptyText}>
              You don&apos;t have any tasks registered yet <br />
              Create tasks and organize your to-do items
            </p>
          </div> */}
        </div>
      </MyContext.Provider>
    </div>
  );
};

export default App;
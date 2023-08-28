/* eslint-disable no-extra-boolean-cast */
/* eslint-disable react/prop-types */
import styles from "./App.module.css";
import boardIcon from "./assets/boardIcon.svg";
import AddTodoForm from "./components/AddTodoForm/AddTodoForm";
import Header from "./components/Header/Header";
import TodoCounter from "./components/TodoCounter/TodoCounter";
import TodoList from "./components/TodoList/TodoList";
import { useTodoContext } from "./utils/MyContext";

const App = () => {
  const { todos } = useTodoContext();
  return (
    <div className={styles.todoMain}>
      <Header />
      <AddTodoForm />
      <div className={styles.todoPanel}>
        <TodoCounter />
        {!!todos.length ? (
          <TodoList />
        ) : (
          <div className={styles.todoEmpty}>
            <img src={boardIcon} className={styles.boardIcon} />
            <p className={styles.emptyText}>
              You don&apos;t have any tasks registered yet <br />
              Create tasks and organize your to-do items
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;

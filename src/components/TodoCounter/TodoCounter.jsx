import { useTodoContext } from "../../utils/MyContext";
import styles from "./TodoCounter.module.css";

const TodoCounter = () => {
  const { todos } = useTodoContext();
  return (
    <div className={styles.todoInfo}>
      <div className={styles.todoCreated}>
        <p className={styles.createdText}>Created todos</p>
        <p className={styles.createdCount}>{todos.length}</p>
      </div>
      <div className={styles.todoCompleted}>
        <p className={styles.completedText}>Completed todos</p>
        <p className={styles.createdCount}>
          {todos.filter((todo) => todo.checked).length} of {""}
          {todos.length}
        </p>
      </div>
    </div>
  );
};

export default TodoCounter;

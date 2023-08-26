import { useContext } from "react";
import MyContext from "../../utils/MyContext";
import TodoItem from "./TodoItem/TodoItem";
import styles from "./TodoList.module.css";

const TodoList = () => {
  const { todos, deleteTodo } = useContext(MyContext);
  return (
    <>
      <ul className={styles.todoList}>
        {todos.map((todo, id) => (
          <li className={styles.todoListItem} key={id}>
            <TodoItem todo={todo} deleteTodo={deleteTodo} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;

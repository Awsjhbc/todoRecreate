/* eslint-disable react/prop-types */
import styles from "./TodoItem.module.css";
import ItemButton from "./ItemButton/ItemButton";

const TodoItem = ({ todo, deleteTodo }) => {
  console.log(todo);
  return (
    <>
      <div className={styles.todoItem}>
        <label className={styles.todoLabel}>
          <input type="checkbox" className={styles.checkboxNone} />
          <span className={styles.customCheckbox}></span>
          <p className={styles.todoName}>{todo.description}</p>
        </label>
        <div className={styles.itemButtons}>
          <ItemButton>
            <span className={styles.pencilIcon}></span>
          </ItemButton>
          <ItemButton onClick={() => deleteTodo(todo.id)}>
            <span className={styles.trashIcon}></span>
          </ItemButton>
        </div>
      </div>
    </>
  );
};

export default TodoItem;

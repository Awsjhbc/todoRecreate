/* eslint-disable react/prop-types */
import classNames from "classnames";

import ItemButton from "./ItemButton/ItemButton";
import styles from "./TodoItem.module.css";

const TodoItem = ({
  todo,
  isChecked,
  onChecked,
  setEditedTodo,
  deleteTodo,
}) => {
  return (
    <>
      <div className={styles.todoItem}>
        <>
          <label
            className={classNames(styles.label, {
              [styles.checked]: isChecked,
            })}
          >
            <input
              type="checkbox"
              className={styles.checkboxNone}
              checked={isChecked}
              onChange={() => onChecked(todo.id)}
            />
            <span className={styles.customCheckbox}></span>
            {todo.description}
          </label>
          <div className={styles.itemButtons}>
            <ItemButton onClick={() => setEditedTodo(todo.id)}>
              <span className={styles.lopataIcon}></span>
            </ItemButton>
            <ItemButton onClick={() => deleteTodo(todo.id)}>
              <span className={styles.trashIcon}></span>
            </ItemButton>
          </div>
        </>
      </div>
    </>
  );
};

export default TodoItem;

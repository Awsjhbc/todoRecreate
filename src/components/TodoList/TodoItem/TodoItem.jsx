/* eslint-disable react/prop-types */
import styles from "./TodoItem.module.css";
import ItemButton from "./ItemButton/ItemButton";
import classNames from "classnames";

const TodoItem = ({
  todo,
  deleteTodo,
  editedTodo,
  onChecked,
  isEditing,
  cancelEditing,
  handleEditTodoChange,
  saveEditedTodo,
  setIsEditing,
  isChecked,
}) => {
  return (
    <>
      <div className={styles.todoItem}>
        {isEditing === todo.id ? (
          <>
            <input
              type="text"
              value={editedTodo}
              onChange={handleEditTodoChange}
              className={styles.inputValue}
            />
            <div className={styles.editBtn}>
              <ItemButton onClick={() => saveEditedTodo(todo, todo.id)}>
                <span className={styles.saveIcon}></span>
              </ItemButton>
              <ItemButton onClick={() => cancelEditing()}>
                <span className={styles.cancelIcon}></span>
              </ItemButton>
            </div>
          </>
        ) : (
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
              <ItemButton onClick={() => setIsEditing(todo.id)}>
                <span className={styles.lopataIcon}></span>
              </ItemButton>
              <ItemButton onClick={() => deleteTodo(todo.id)}>
                <span className={styles.trashIcon}></span>
              </ItemButton>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default TodoItem;

/* eslint-disable react/prop-types */
import styles from "./EditTodoItem.module.css";
import ItemButton from "../ItemButton/ItemButton";
import { useState } from "react";

const EditTodoItem = ({ todo, cancelEditing, editTodoName }) => {
  const [value, setValue] = useState(todo.description);

  const handleSubmit = (event) => {
    event.preventDefault();
    editTodoName(value, todo.id);
    cancelEditing();
  };

  return (
    <form className={styles.editForm} onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className={styles.inputValue}
      />
      <div className={styles.editBtn}>
        <ItemButton type="submit">
          <span className={styles.saveIcon}></span>
        </ItemButton>
        <ItemButton type="submit">
          <span className={styles.cancelIcon}></span>
        </ItemButton>
      </div>
    </form>
  );
};

export default EditTodoItem;

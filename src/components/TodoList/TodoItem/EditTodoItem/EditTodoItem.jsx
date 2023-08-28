/* eslint-disable react/prop-types */
import { useState } from "react";

import ItemButton from "../ItemButton/ItemButton";
import styles from "./EditTodoItem.module.css";

const EditTodoItem = ({ todo, editTodoName, cancelEditing }) => {
  const [value, setValue] = useState(todo.description);

  const handleSubmit = (event) => {
    event.preventDefault();
    editTodoName(value, todo.id);
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
        <ItemButton type="button" onClick={() => cancelEditing()}>
          <span className={styles.cancelIcon}></span>
        </ItemButton>
      </div>
    </form>
  );
};

export default EditTodoItem;

/* eslint-disable react/prop-types */
import { useState } from "react";

import plusIcon from "../../assets/plusIcon.svg";
import { useTodoContext } from "../../utils/MyContext";
import Button from "./AddTodoButton/AddTodoButton";
import styles from "./AddTodoForm.module.css";

const AddTodoForm = () => {
  const { addTodo } = useTodoContext();
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value) {
      addTodo(value);
      setValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.inputMain}>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className={styles.inputValue}
        placeholder="Create todo"
      />
      <Button type="submit">
        Create
        <span>
          <img src={plusIcon} className={styles.buttonImg} />
        </span>
      </Button>
    </form>
  );
};

export default AddTodoForm;

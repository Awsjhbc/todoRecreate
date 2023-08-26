import styles from "./AddTodoForm.module.css";
import Button from "./AddTodoButton/AddTodoButton";
import plusIcon from "../../assets/plusIcon.svg";
import { useContext, useState } from "react";
import MyContext from "../../utils/MyContext";

const AddTodoForm = () => {
  const { addTodo } = useContext(MyContext);

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

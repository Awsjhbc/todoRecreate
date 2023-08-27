import { useContext } from "react";
import MyContext from "../../utils/MyContext";
import TodoItem from "./TodoItem/TodoItem";
import styles from "./TodoList.module.css";

const TodoList = () => {
  const {
    todos,
    deleteTodo,
    editedTodo,
    onChecked,
    isEditing,
    cancelEditing,
    handleEditTodoChange,
    saveEditedTodo,
    setIsEditing,
  } = useContext(MyContext);
  return (
    <>
      <ul className={styles.todoList}>
        {todos.map((todo, id) => (
          <li className={styles.todoListItem} key={id}>
            <TodoItem
              todo={todo}
              deleteTodo={deleteTodo}
              onChecked={onChecked}
              isEditing={isEditing}
              cancelEditing={cancelEditing}
              handleEditTodoChange={handleEditTodoChange}
              saveEditedTodo={saveEditedTodo}
              editedTodo={editedTodo}
              setIsEditing={setIsEditing}
              isChecked={todo.checked}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;

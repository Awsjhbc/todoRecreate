import { useContext } from "react";
import MyContext from "../../utils/MyContext";
import TodoItem from "./TodoItem/TodoItem";
import styles from "./TodoList.module.css";
import EditTodoItem from "./TodoItem/EditTodoItem/EditTodoItem";

const TodoList = () => {
  const {
    todos,
    deleteTodo,
    editedTodo,
    onChecked,
    setEditedTodo,
    cancelEditing,
    handleEditTodoChange,
    saveEditedTodo,
    editTodoName,
  } = useContext(MyContext);
  return (
    <>
      <ul className={styles.todoList}>
        {todos.map((todo, id) =>
          editedTodo === todo.id ? (
            <EditTodoItem
              todo={todo}
              key={id}
              editedTodo={editedTodo}
              handleEditTodoChange={handleEditTodoChange}
              saveEditedTodo={saveEditedTodo}
              cancelEditing={cancelEditing}
              editTodoName={editTodoName}
            />
          ) : (
            <li className={styles.todoListItem} key={id}>
              <TodoItem
                todo={todo}
                deleteTodo={deleteTodo}
                onChecked={onChecked}
                handleEditTodoChange={handleEditTodoChange}
                isChecked={todo.checked}
                setEditedTodo={setEditedTodo}
              />
            </li>
          )
        )}
      </ul>
    </>
  );
};

export default TodoList;

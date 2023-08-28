/* eslint-disable react/prop-types */

import { useTodoContext } from "../../utils/MyContext";
import EditTodoItem from "./TodoItem/EditTodoItem/EditTodoItem";
import TodoItem from "./TodoItem/TodoItem";
import styles from "./TodoList.module.css";

const TodoList = () => {
  const {
    todos,
    editedTodo,
    cancelEditing,
    editTodoName,
    deleteTodo,
    onChecked,
    handleEditTodoChange,
    setEditedTodo,
  } = useTodoContext();
  return (
    <>
      <ul className={styles.todoList}>
        {todos.map((todo, id) =>
          editedTodo === todo.id ? (
            <EditTodoItem
              todo={todo}
              key={id}
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

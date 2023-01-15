import React, { FC } from "react";
import { iTodo } from "../model";
import SingleTodo from "./SingleTodo";
import styles from "./todoList.module.css";

interface iProps {
  todos: iTodo[];
  setTodos: React.Dispatch<React.SetStateAction<iTodo[]>>;
}

const TodoList: FC<iProps> = ({ todos, setTodos }) => {
  return (
    <div className={styles.todos}>
      {todos.map((todo) => (
        <SingleTodo
          todo={todo}
          key={todo.id}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;

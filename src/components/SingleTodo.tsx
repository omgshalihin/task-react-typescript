import React, { FC } from "react";
import { iTodo } from "../model";
import styles from "./singleTodo.module.css";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

interface iProps {
  todo: iTodo;
  todos: iTodo[];
  setTodos: React.Dispatch<React.SetStateAction<iTodo[]>>;
}

const SingleTodo: FC<iProps> = ({ todo, todos, setTodos }) => {
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <form className={styles.todos__single}>
      {todo.isDone ? (
        <s className={styles.todos__single__text}>{todo.todo}</s>
      ) : (
        <span className={styles.todos__single__text}>{todo.todo}</span>
      )}
      <div>
        <span className={styles.icon}>
          <AiFillEdit />
        </span>
        <span className={styles.icon} onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className={styles.icon} onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;

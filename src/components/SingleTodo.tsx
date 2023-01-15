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
  return (
    <form className={styles.todos__single}>
      <span className={styles.todos__single__text}>{todo.todo}</span>
      <div>
        <span className={styles.icon}>
          <AiFillEdit />
        </span>
        <span className={styles.icon}>
          <AiFillDelete />
        </span>
        <span className={styles.icon}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;

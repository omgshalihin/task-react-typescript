import React, { FC, useRef } from "react";
import styles from "./inputField.module.css";

interface iProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: FC<iProps> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className={styles.input}
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        className={styles.input__box}
        type="text"
        placeholder="Enter a task"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
        name=""
        id=""
      />
      <button className={styles.input__submit} type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;

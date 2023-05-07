import React, { useRef } from "react";
import "./style.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputFields = (props: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  
  return (
    <form
      className="input"
      onSubmit={(e) => {
        props.handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        type="input"
        placeholder="Enter a Task"
        className="input__box"
        value={props.todo}
        onChange={(e) => props.setTodo(e.target.value)}
      />
      <button className="input_submit" type="submit">
        Go
      </button>
    </form>
  );
};
export default InputFields;

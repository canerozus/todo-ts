import React from "react";
import "./style.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void
}

const InputFields = (props: Props) => {
  return (
    <form className="input" onSubmit={props.handleAdd}>
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

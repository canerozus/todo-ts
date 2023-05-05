import React from "react";
import "./style.css"
type Props = {};

const InputFields = (props: Props) => {
  return (
    <form className="input">
      <input type="input" placeholder="Enter a Task" className="input__box" />
      <button className="input_submit" type="submit">Go</button>
    </form>
  );
};
export default InputFields;

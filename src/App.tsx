import { useState } from "react";
import "./App.css";
import  InputFields  from "./components/InputFields";

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("")
  console.log(todo)
  return (
    <div className="App">
      <span className="heading">TO-DO</span>
      <InputFields todo={todo} setTodo={setTodo}/>
    </div>
  );
};

export default App;

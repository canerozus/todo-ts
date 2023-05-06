import { useState } from "react";
import "./App.css";
import  InputFields  from "./components/InputFields";
import { Todo } from "./model"

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])
  return (
    <div className="App">
      <span className="heading">TO-DO</span>
      <InputFields todo={todo} setTodo={setTodo}/>
    </div>
  );
};

export default App;

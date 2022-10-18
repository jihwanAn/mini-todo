import React, {useState} from 'react';
import './App.css';
import Template from './component/Template';
import TodoList from  './component/TodoList';
import { AiOutlinePlusCircle } from "react-icons/ai";
import TodoInsert from './component/TodoInsert';

let nextId = 4;

const App = () => {
  const [insertToggle, setInsertToggle] = useState(false);
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "할 일1",
      checked: true
    },
    {
      id: 2,
      text: "할 일2",
      checked: false
    },
    {
      id: 3,
      text: "할 일3",
      checked: true
    }
  ]);

  const onInsertToggle = () => {
    setInsertToggle(prev => !prev);
  };

  const onInsertTodo = (text) => {
    if (text === ""){
      return alert('할 일을 입력해주세요 . .')
    } else {
      const todo = {
        id: nextId,
        text,
        checked: false
      }
      setTodos(todos => todos.concat(todo)); 
      nextId++;
    }
  }

  return (
    <Template todoLength={todos.length}>
      <TodoList todos={todos} />
      <div className="add-todo-button" onClick={onInsertToggle}>
        <AiOutlinePlusCircle/>
      </div> 
      {insertToggle && 
      <TodoInsert 
      onInsertToggle={onInsertToggle} 
      onInsertTodo={onInsertTodo}
      />}
    </Template>
    );
};

export default App;

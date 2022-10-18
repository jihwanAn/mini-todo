import React, { useState, useEffect } from 'react';
import { MdDoneAll } from "react-icons/md";
import { BsFillPencilFill, BsTrashFill } from "react-icons/bs";
import "./TodoInsert.css";

const TodoInsert = ({ onInsertToggle, onInsertTodo, selectedTodo, onRemove, onUpdate }) => {
  const [value, setValue] = useState("");

  const onChange = e => {
    setValue(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    onInsertTodo(value);
    setValue("");
    onInsertToggle();
  };

  useEffect(() => {
    if (selectedTodo) {
      setValue(selectedTodo.text);
    }
  }, [selectedTodo]);
    return (
      <div>
        <div className="background" onClick={onInsertToggle}></div>
        <form 
        onSubmit={
          selectedTodo
          ? () => {
              onUpdate(selectedTodo.id, value)} : onSubmit}>
            <input
            placeholder="please type"
            value={value}
            onChange={onChange}
            ></input>
            {selectedTodo ? (
              <div className="rewrite">
                <BsTrashFill 
                onClick={() => {
                  onRemove(selectedTodo.id)}}/>  
                <BsFillPencilFill 
                onClick={() => {
                  onUpdate(selectedTodo.id, value);
                }}
                />
              </div>
            ): (
            <button type="submit">
                <MdDoneAll />
            </button>
            )}
        </form>
      </div>   
    );
};      

export default TodoInsert;
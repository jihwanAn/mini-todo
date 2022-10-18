import React from 'react';
import { MdDoneAll } from "react-icons/md";
import "./TodoInsert.css";

const TodoInsert = ({ onInsertToggle }) => {
    return (
      <div>
        <div className="background" onClick={onInsertToggle}></div>
        <form>
            <input></input>
            <button type="submit">
                <MdDoneAll />
            </button>
        </form>
      </div>
    );
};

export default TodoInsert;
import React from 'react';
import "./Template.css";


const Template = ({ children, todoLength }) => {
    return (
        <div className="Template">
            <div className="tilte"> 오늘 할일 ({todoLength}) </div>
            <div> {children} </div>
        </div>
    );
};

export default Template;
import React from 'react';
import './Taskcard.css';

//To form a taskcard of a list
export default function TaskCard(props) {
  return (
    <div className="ui card" draggable="true" id={[props.timeId]} onDragStart={props.onDragStart} >
      <div className="content">
        <div className="header">
          {props.taskHeader}
        </div>
        <p>
      {props.taskText}
      </p>
      </div>
    </div>
  ) 
};
import React from 'react';
import TaskCard from './Taskcard';
import AddTaskForm from './Addtask';
import './Columnlist.css';

export default class List extends React.Component {
  constructor(props) {
    super(props);
    }
   
  render() {
    const cards = this.props.cards.map((card, index) => {
      return ( 
        <li key={index} data-aos="zoom-in">
          <TaskCard {...card} onDragStart={this.props.onDragStart} />
        </li>
        
      );
    })
      
    return (
      <div>
        <h2 className={`name-header`}>{this.props.title}</h2>
        <ul className="list" onDragOver={this.props.onDragOver} onDrop={this.props.onDrop}>
          {cards}
          <li className="add-list-wrapper">
            <AddTaskForm formNum={this.props.id} onAdd={this.props.onAdd} />
          </li>
        </ul>
      </div>
    );
  }
  
}


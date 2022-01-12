import React from 'react';

export default class AddTaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    }
  }

  onSubmit(event) {
    event.preventDefault();
    const headerText = this.headerInput.value.trim();
    const taskText = this.textInput.value.trim();
    const listNumber = this.props.formNum;
    console.log(listNumber)
    console.log(headerText)
    if (headerText && taskText && this.props.onAdd) {
      this.props.onAdd(headerText,taskText, listNumber);
    }
    this.textInput.value = '';
    this.headerInput.value = '';
  }

 setEditing(editing) {
    this.setState({
      editing
    });
  }

  render() {
    if(!this.state.editing) {
      return (
        <div className="open-add-button" onClick={() => this.setEditing(true)}>
          <i className="blue add icon"></i>
          <a href="#">Add a task</a>
        </div>  
        ); 
    }
      return (
        <form className="card add-task-form" onSubmit={(e) => this.onSubmit(e)}>
          <input type="text" class="task-input" ref={input => this.headerInput = input} aria-label="Add a header" placeholder = "Add title" />
          <input type="text" class="task-input" ref={input => this.textInput = input} aria-label="Add a task" placeholder="Add details" />
          <div>
            <button className="button add-button">Add Task</button>
            <button className="button cancel-button" onClick={() => this.setEditing(false)}>Cancel</button>
          </div>
        </form>
      );
  }
}
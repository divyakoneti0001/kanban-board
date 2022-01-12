import React from 'react';

export default class Addlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    }
  }

  onSubmit(event) {
    event.preventDefault();
    const taskText = this.textInput.value.trim();
    console.log(taskText)
    const listNumber = this.props.formNum;
    if (taskText && this.props.onListAdd) {
        console.log(listNumber)
        this.props.onListAdd(taskText,listNumber)
    }
    this.textInput.value = '';
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
          <a href="#" style={{fontWeight:'bold'}}>Add a List</a>
        </div>  
        ); 
    }
      return (
        <form className="card add-task-form" onSubmit={(e) => this.onSubmit(e)}>
          <input type="text" class="task-input" ref={input => this.textInput = input} aria-label="Add a list" placeholder="Add title" />
          <div>
            <button className="button add-button">Add List</button>
            <button className="button cancel-button" onClick={() => this.setEditing(false)}>Cancel</button>
          </div>
        </form>
      );
  }
}
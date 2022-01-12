import React, { Component } from 'react';
import Addlist from './Addlist';
import List from './Columnlist';
import './Kanbanboard.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import default_tasks from './Rawdata';

export default class KanbanBoard extends Component {
  
  constructor(props) {
    super(props);
    
    //Set the data from localstorage , if its saved there
    if(localStorage.getItem('tasks')) {
      const taskList = localStorage.getItem('tasks');
      const parsedList = JSON.parse(taskList);
      this.state = { lists: parsedList }
      
    //set default data if there is no data stored in localstorage
    } else {
      this.state = {
        lists: default_tasks
      }
      localStorage.setItem('tasks', JSON.stringify(this.state.lists))
    }
  }

  componentDidMount() {
    AOS.init({
      duration : 2000
    });
  }

  //get id of item being dragged and list where it's coming from
  onDragStart = (e, fromList) => {
    console.log(`what a drag!`)
    const dragInfo = {
      taskId: e.currentTarget.id,
      fromList: fromList
    }
  
    localStorage.setItem('dragInfo', JSON.stringify(dragInfo));
  }

  onDragOver = (e) => {
    e.preventDefault();
  }

  //To put a taskcard from one list to other
  onDrop = (e, listNum) => {
    
    const droppedTask = localStorage.getItem('dragInfo');
    const taskList = localStorage.getItem('tasks');
    const parsedList = JSON.parse(taskList);
    const parsedDragInfo = JSON.parse(droppedTask)
    const cardsArray = parsedList[parsedDragInfo.fromList].cards
    const taskCard = cardsArray.find(card => card.timeId == parsedDragInfo.taskId)
    const indexOfCard = cardsArray.findIndex(card => card.timeId == parsedDragInfo.taskId)
    parsedList[parsedDragInfo.fromList].cards.splice(indexOfCard, 1)
    parsedList[listNum].cards.push({...taskCard, listNumber: parseInt(listNum)})

    this.setState({
      lists: parsedList
    });
    localStorage.setItem('tasks', JSON.stringify(parsedList));
    
  }

  //To add a new list 
  onListAdd=(value,formNum)=>{
    const obj = {
    title: value,
    id: formNum ,
    cards : []
   }
   this.setState({lists : [...this.state.lists,obj]})
   localStorage.setItem('tasks', JSON.stringify([...this.state.lists,obj]));
   
}

//To add a new task card
  addTaskCard=(headerText,taskText, listNumber)=> {
    const taskList = localStorage.getItem('tasks');
    const parsedLS = JSON.parse(taskList);
    const taskHeader = headerText;
    console.log(headerText)

    const newTask = {
      taskText,
      taskHeader,
      listNumber,
      timeId: new Date().valueOf()
    }

    parsedLS[listNumber].cards.push(newTask)
    this.setState({
      lists: parsedLS
    })
    localStorage.setItem('tasks', JSON.stringify(parsedLS))
  
  }

render() {
  const lists = this.state.lists.map((list, index) => (
    <li key={index} className="list" data-aos="fade-up" >
      <List {...list} 
        onAdd={(headerText,taskText, listNumber) => this.addTaskCard(headerText,taskText, listNumber)} 
        onDragStart={(e, fromList) => this.onDragStart(e, `${list.id}`)}
        onDragOver={(e) => this.onDragOver(e)} 
        onDrop={(e, listNum) => {this.onDrop(e, `${list.id}`)}}
      />
    </li>
  ));
   
  return (
    <div >
      <div className="ui top attached menu" data-aos="fade-down">
        <div className="header-class">
          KANBAN BOARD
        </div>
      <div className="right menu">
      <div className="ui right aligned category search item">
      <Addlist formNum={this.state.lists.length} onListAdd={this.onListAdd} />
      </div>
      </div>
      </div>
      <ul className="ui grid" style={{margin:'4px'}}>
        {lists}
      </ul>
    </div>
    
  );
  }
}





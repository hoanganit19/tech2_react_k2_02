import React, { Component } from 'react'
import getContext from '../../Context/getContext';
import {v4 as uniqueId} from 'uuid';
import { addToDo as addToDoItem } from './toDoSlice';

export class AddToDo extends Component {

  constructor(props){
    super(props);

    this.state = {
      jobName: ''
    }
    
  }

  handleAddToDo = (e) => {
    e.preventDefault();
    const {jobName} = this.state;
    //console.log(jobName);

    //const {addTodo} = this.props.store;

    if (jobName!==''){
      addToDoItem({
       // id: uniqueId(),
        name: jobName,
        isCompleted: false
      }, this.props.store);
      
    }else{
      alert('Vui lòng nhập tên công việc');
    }
   

    this.resetForm();
  }

  handleChangeValue = (e) => {
    this.setState({
      jobName: e.target.value
    })
  }

  resetForm = () => {
    this.setState({
      jobName: ''
    })
  }

  render() {
    
    const {jobName} = this.state;

    return (
        <form onSubmit={this.handleAddToDo}>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Tên công việc..."
              onChange={this.handleChangeValue}
              value = {jobName}
            />
            <button type="submit" className="btn btn-primary">
              Thêm
            </button>
          </div>
        </form>
    )
  }
}

export default getContext(AddToDo)
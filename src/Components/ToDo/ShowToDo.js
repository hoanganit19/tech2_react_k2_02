import React, { Component } from "react";
import getContext from "../../Context/getContext";

export class ShowToDo extends Component {
  constructor(props){
    super(props);
  }



  render() {

    const {doLists} = this.props.store.data;

    const {removeToDo, completeToDo} = this.props.store;

    return (
      <div className="todo-lists">
        {
          doLists.map(({id, name, isCompleted}) => {
          
            return (
              <div className={`todo-item ${isCompleted?'completed':''}`} key={id}>
                  <input type="checkbox" className="me-2" onChange={(e) => {
                    completeToDo(id, e.target.checked);
                  }}/>
                  <span>{name}</span>
                  <span className="remove" onClick={() => {removeToDo(id)}}>&times;</span>
                </div>
            );
          })
        }
        
      </div>
    );
  }
}

export default getContext(ShowToDo);

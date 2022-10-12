import React, { Component } from "react";
import getContext from "../../Context/getContext";
import toDoSlice from "./toDoSlice";

export class ShowToDo extends Component {
  constructor(props) {
    super(props);
    
  }

  componentDidMount = () => {
    //const {getTodos} = this.props.store.globalSlice.toDoSlice;
    //console.log(this.props.store.globalSlice);
  
    //getTodos();

    //toDoSlice.getTodos();

    this.props.store.dispatch({
      isLoading: false
    })
  }

  render() {
    const { doLists, isLoading } = this.props.store.data;

    //const { removeToDo, completeToDo } = this.props.store.globalSlice;

    return (
      <div className="todo-lists">
        {
          isLoading
          ?
          <div className="alert alert-info">Đang tải...</div>
          :
          doLists.length 
          ?
          doLists.map(({ id, name, isCompleted }) => {
            const checked = {
              defaultChecked: isCompleted
            }
            return (
              <div
                className={`todo-item ${isCompleted ? "completed" : ""}`}
                key={id}
              >
                <input
                  type="checkbox"
                  className="me-2"
                  onChange={(e) => {
                    //completeToDo(id, e.target.checked);
                  }}
                  {...checked}
                />
                <span>{name}</span>
                <span
                  className="remove"
                  onClick={() => {
                   // removeToDo(id);
                  }}
                >
                  &times;
                </span>
              </div>
            );
          })
          :
          <div className="alert alert-danger text-center mt-3">Không tìm thấy kết quả</div>
        }
      </div>
    );
  }
}

export default getContext(ShowToDo);

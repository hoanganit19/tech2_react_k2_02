import React, { Component } from "react";
import getContext from "../../Context/getContext";

export class FilterToDo extends Component {
  constructor(props) {
    super(props);
    this.params = {}
    this.state = {
      status: 'all'
    }
  }
  handleFilterToDos = (e) => {
  
    if (e.target.dataset.status !== undefined) {
      const status = e.target.dataset.status;
      
      delete this.params.isCompleted;

      if (status==='completed' || status==='uncomplete'){
        this.params.isCompleted = status==='completed'?true:false;
      }

      this.setState({
        status: status
      })
      
    } else {
      this.params.q = e.target.value;
    }
    const { filterToDos } = this.props.store;
    filterToDos(this.params);
  };

  render() {
    const {status} = this.state; 
    
    return (
      <div>
        <form>
          <input
            type="search"
            className="form-control"
            placeholder="Từ khoá tìm kiếm..."
            onChange={this.handleFilterToDos}
          />
          <div className="btn-group mt-2">
            <button
              type="button"
              data-status="all"
              className={`btn btn-primary btn-sm ${status=='all'?'disabled':''}`}
              onClick={this.handleFilterToDos}
            >
              Tất cả
            </button>
            <button
              type="button"
              data-status="completed"
              className={`btn btn-success btn-sm ${status=='completed'?'disabled':''}`}
              onClick={this.handleFilterToDos}
            >
              Hoàn thành
            </button>
            <button
              type="button"
              data-status="uncomplete"
              className={`btn btn-danger btn-sm ${status=='uncomplete'?'disabled':''}`}
              onClick={this.handleFilterToDos}
            >
              Chưa hoàn thành
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default getContext(FilterToDo);

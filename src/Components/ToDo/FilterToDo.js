import React, { Component } from "react";
import getContext from "../../Context/getContext";

export class FilterToDo extends Component {
  constructor(props){
    super(props);
  }
  handleFilterToDos = (e) => {
    const keyword = e.target.value;
    const {filterToDos} = this.props.store;
    filterToDos(keyword);
  };

  render() {
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
            <button type="button" className="btn btn-primary btn-sm disabled">Tất cả</button>
            <button type="button" className="btn btn-success btn-sm">Hoàn thành</button>
            <button type="button" className="btn btn-danger btn-sm">Chưa hoàn thành</button>
          </div>
        </form>
      </div>
    );
  }
}

export default getContext(FilterToDo);

import React, { Component } from 'react'

export class FilterToDo extends Component {
  render() {
    return (
      <div>
        <form>
            <input type="search" className="form-control" placeholder='Từ khoá tìm kiếm...'/>
        </form>
      </div>
    )
  }
}

export default FilterToDo
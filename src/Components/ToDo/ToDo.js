import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './ToDo.css';
import AddToDo from "./AddToDo";
import ShowToDo from "./ShowToDo";
import FilterToDo from "./FilterToDo";

export class ToDo extends Component {
  render() {
    return (
      <div className="container">
        <h1>ToDo List</h1>
        <FilterToDo />
        <ShowToDo />        
        <AddToDo />
      </div>
    );
  }
}

export default ToDo;

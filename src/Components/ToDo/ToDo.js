import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ToDo.css";
import AddToDo from "./AddToDo";
import ShowToDo from "./ShowToDo";
import FilterToDo from "./FilterToDo";
import ReactMarkdown from "react-markdown";

export class ToDo extends Component {
  render() {
    const content = `## The Markdown language 
## Editing with Markdown output
Tạ **_Hoàng An_**`;

    return (
      <div className="container">
        <h1>ToDo List</h1>
        <FilterToDo />
        <ShowToDo />
        <AddToDo />
        {/* <div>
          <ReactMarkdown>{content}</ReactMarkdown>
        </div> */}
      </div>
    );
  }
}

export default ToDo;

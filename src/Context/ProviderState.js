import React, { Component } from "react";
import config from "../Config.json";

export const ProviderContext = React.createContext();

const { SERVER_API } = config;

class ProviderState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doLists: [],
      isLoading: true,
    };

    this.todoApi = SERVER_API + "/todos";
  }

  getTodos = async () => {
    const response = await fetch(this.todoApi);
    const todos = await response.json();
    this.setState({
      doLists: todos,
      isLoading: false,
    });
  };

  addToDo = async (todo) => {
    const response = await fetch(this.todoApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });

    if (response.ok) {
      //this.getTodos();
      const data = await response.json();
      this.setState({
        doLists: this.state.doLists.concat(data),
      });
    }
  };

  removeToDo = async (id) => {
    if (window.confirm("Bạn có chắc chắn")) {
      
      const response =  await fetch(this.todoApi+'/'+id, {
        method: "DELETE"
      });

      if (response.ok){
        //this.getTodos();
        const doLists = [...this.state.doLists];

        const index = doLists
          .map((x) => {
            return x.id;
          })
          .indexOf(id);

        doLists.splice(index, 1);

        this.setState({
          doLists: doLists,
        });
      }
    }
  };

  completeToDo = async (id, checkedStatus) => {
    // const doLists = [...this.state.doLists];
    // const index = doLists
    //   .map((x) => {
    //     return x.id;
    //   })
    //   .indexOf(id);

    // doLists[index].isCompleted = checkedStatus;

    // this.setState({
    //   doLists: doLists,
    // });
    const response = await fetch(this.todoApi+'/'+id, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        isCompleted: checkedStatus
      })
    });

    if (response.ok){
      this.getTodos();
    }

  };

  filterToDos = async (keyword) => {
    this.setState({
      isLoading: true
    })
    
    const response = await fetch(this.todoApi+'?q='+keyword);
    const data = await response.json();
    this.setState({
      doLists: data,
      isLoading: false
    })
  }

  render() {
    const { children } = this.props;

    return (
      <ProviderContext.Provider
        value={{
          data: this.state,
          addTodo: this.addToDo,
          removeToDo: this.removeToDo,
          completeToDo: this.completeToDo,
          getTodos: this.getTodos,
          filterToDos: this.filterToDos
        }}
      >
        {children}
      </ProviderContext.Provider>
    );
  }
}

export default ProviderState;

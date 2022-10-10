import React, { Component } from 'react'

export const ProviderContext = React.createContext();

class ProviderState extends Component {

  constructor(props){
    super(props);
    this.state = {
      doLists: [
        
      ]
    }
  }

  addToDo = (todo) => {
    this.setState({
      doLists: this.state.doLists.concat(todo)
    })
  }

  removeToDo = (id) => {
    if (window.confirm('Bạn có chắc chắn')){

      const doLists = [...this.state.doLists];

      const index = doLists.map(x => {
        return x.id;
      }).indexOf(id);
      
      doLists.splice(index, 1);

      this.setState({
        doLists: doLists
      })
    }
  }

  completeToDo = (id, checkedStatus) => {
    const doLists = [...this.state.doLists];
    const index = doLists.map(x => {
      return x.id;
    }).indexOf(id);
    
    doLists[index].isCompleted = checkedStatus;

    this.setState({
      doLists: doLists
    })
  }

  render() {

    const {children} = this.props;

    return (
      <ProviderContext.Provider value={{
        data: this.state,
        addTodo: this.addToDo,
        removeToDo: this.removeToDo,
        completeToDo: this.completeToDo
      }}>
          {children}
      </ProviderContext.Provider>
    )
  }
}

export default ProviderState
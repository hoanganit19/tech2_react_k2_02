import config from '../../Config.json';
import ProviderState from '../../Context/ProviderState';


const { SERVER_API } = config;
const todoApi = SERVER_API + "/todos";

const state = {
    doLists: [],
    isLoading: true
}

const getTodos = async () => {
  const response = await fetch(todoApi);
  const todos = await response.json();
  console.log(todos);
//   this.setState({
//     doLists: todos,
//     isLoading: false,
//   });
    //state.doLists = todos; 

};

const addToDo = async (todo) => {
  const response = await fetch(todoApi, {
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

const removeToDo = async (id) => {
  if (window.confirm("Bạn có chắc chắn")) {
    const response = await fetch(todoApi + "/" + id, {
      method: "DELETE",
    });

    if (response.ok) {
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

const completeToDo = async (id, checkedStatus) => {
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
  const response = await fetch(todoApi + "/" + id, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      isCompleted: checkedStatus,
    }),
  });

  if (response.ok) {
    this.getTodos();
  }
};

const filterToDos = async (params) => {
  const queryString = new URLSearchParams(params).toString();

  this.setState({
    isLoading: true,
  });

  const response = await fetch(todoApi + "?" + queryString);
  const data = await response.json();
  this.setState({
    doLists: data,
    isLoading: false,
  });
};

const toDoSlice = {
    getTodos: getTodos,
    addToDo: addToDo,
    removeToDo: removeToDo,
    completeToDo: completeToDo,
    filterToDos: filterToDos,
    state: state
}

export default toDoSlice;
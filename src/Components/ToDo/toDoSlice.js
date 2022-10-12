import config from '../../Config.json';
import ProviderState from '../../Context/ProviderState';


const { SERVER_API } = config;
const todoApi = SERVER_API + "/todos";

export const getTodos = async (store) => {
  const response = await fetch(todoApi);
  const todos = await response.json();
  store.dispatch({
    doLists: todos,
    isLoading: false
  })
//   this.setState({
//     doLists: todos,
//     isLoading: false,
//   });
    //state.doLists = todos; 

};

export const addToDo = async (todo, store) => {
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
    store.dispatch({
        doLists: this.state.doLists.concat(data)
    })
  }
};

export const removeToDo = async (id, store) => {
  if (window.confirm("Bạn có chắc chắn")) {
    const response = await fetch(todoApi + "/" + id, {
      method: "DELETE",
    });

    if (response.ok) {
      //this.getTodos();
      const doLists = [...store.data.doLists];

      const index = doLists
        .map((x) => {
          return x.id;
        })
        .indexOf(id);

      doLists.splice(index, 1);

     store.dispatch({
        doLists: doLists
     })
    }
  }
};

export const completeToDo = async (id, checkedStatus, store) => {
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
    getTodos(store);
  }
};

export const filterToDos = async (params) => {
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


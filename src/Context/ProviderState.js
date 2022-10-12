import React, { Component } from "react";

//import toDoSlice from "../Components/ToDo/toDoSlice";

export const ProviderContext = React.createContext();

class ProviderState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doLists: [],
      isLoading: true,
    };

    // this.globalSlice = {
    //   toDoSlice,
    // }
  }

  dispatch = (data) => {
    this.setState(data);
  }

  render() {
    const { children } = this.props;

    return (
      <ProviderContext.Provider
        value={{
          data: this.state,
          dispatch: this.dispatch
          // globalSlice: this.globalSlice,
          // current: this
        }}
      >
        {children}
      </ProviderContext.Provider>
    );
  }
}

export default ProviderState;

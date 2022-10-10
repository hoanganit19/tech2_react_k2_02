import React, { Component } from "react";
import getContext from "../Context/getContext";

export class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {msg} = this.props.store;
    const {name:fullName} = this.props;
    return (
      <>
        <h1>Example Context API</h1>
        <h2>{msg}</h2>
        <h2>Name: {fullName}</h2>
      </>
    );
  }
}

export default getContext(Home);

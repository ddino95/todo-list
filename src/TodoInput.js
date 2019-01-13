import React, { Component } from "react";
import "./TodoInput.css";
class TodoInput extends Component {
  render() {
    return (
      <form onSubmit={this.props.handelInput}>
        <input name="text" />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoInput;

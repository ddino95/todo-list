import React from "react";

export default class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "test"
    };
    this.handelChange = this.handelChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  handelChange(e) {
    console.log("change here");
  }

  addTodo(todo) {
    console.log("Todo:", todo);
  }
  render() {
    return (
      <div>
        <input type="text" value="" onChange={this.handelChange} />
        <button className="btn" onClick={() => this.addTodo(this.state.value)}>
          Submit
        </button>
      </div>
    );
  }
}

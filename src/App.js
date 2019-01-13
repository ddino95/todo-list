import React, { Component } from "react";
import "./App.css";
import "./TodoInput";
import "./TodoShow";
import TodoInput from "./TodoInput";
import TodoShow from "./TodoShow";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.handelInput = this.handelInput.bind(this);
  }
  handelInput(e) {
    e.preventDefault();
    this.setState({
      items: [...this.state.items, e.target.text.value]
    });
  }

  deleteItem(value) {
    console.log(value);
  }

  render() {
    return (
      <div className="App">
        <TodoInput handelInput={this.handelInput} />
        <TodoShow deleteItem={this.deleteItem} items={this.state.items} />
      </div>
    );
  }
}

export default App;

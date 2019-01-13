import React, { Component } from "react";
import "./TodoShow.css";
class TodoShow extends Component {
  render() {
    const listItem = this.props.items.map((value, key) => {
      return (
        <li onClick={this.props.deleteItem(value)} key={key}>
          {value}
          <button>Xoá</button>
        </li>
      );
    });
    return <ul>{listItem}</ul>;
  }
}

export default TodoShow;

import React from "react";

import AddNewItem from "../add-new-item/add-new-item";
import List from "../list/list";
import Loader from "../loader/loader";

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  componentWillMount() {
    this.props.fetchTodos();
  }

  render() {
    const { completeTodo, addTodo, todoData } = this.props;
    const { todos, loading } = todoData;

    return (
      <div>
        <AddNewItem formSubmit={addTodo} todos={todos} />

        {loading && <Loader />}

        {todos.length > 0 && <List todos={todos} completeTodo={completeTodo} />}

        {!todos.length && <h6>You don't have anything on your agenda!</h6>}
      </div>
    );
  }
}

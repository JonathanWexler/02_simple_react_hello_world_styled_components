import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import store from './configureStore'
import TodoList from './TodoList'

const MyApplication = () => {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  )
};

ReactDOM.render(<MyApplication />, document.getElementById("root"));

import React, { useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import store from "./configureStore";

const Subtitle = styled.h2`
  font-style: ${(props) => (props.emphasis ? "italic" : "normal")};
`;

const TodoListWrapper = styled.ul`
  font-size: 1.25em;
  padding: 0;
`;

const ListItem = styled.li`
  list-style: none;
`;

const AddTodo = () => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState();
  const handleChange = (event) => {
    setNewTodo(event.target.value);
  };
  const handleClick = () => {
    setNewTodo("");
    return dispatch({
      type: "ADD_TODO",
      payload: {
        label: newTodo,
        id: Math.ceil(Math.random() * 100),
      },
    });
  };

  return (
    <>
      <input value={newTodo} onChange={handleChange} type="text" />
      <button onClick={handleClick}>Add Item</button>
    </>
  );
};

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const CheckboxWrapper = styled.label`
    display: inline-block;
    padding: 0.25em 0;

    input {
      width: 1em;
      height: 1em;
      margin-right: 0.5em;
    }
  `;

  const handleCheck = (id) => {
    console.log("triggered");
    return dispatch({
      type: "DELTE_TODO",
      payload: {
        id,
      },
    });
  };

  if (!todos || !todos.length) {
    return (
      <>
        <p>No Items Remaining</p>
        <AddTodo />
      </>
    );
  } else {
    return (
      <>
        <Provider store={store}>
          <h1>My To-do List</h1>
          <Subtitle>Re:Coded</Subtitle>
          <Subtitle emphasis>Nov 09 – Nov 13</Subtitle>

          <TodoListWrapper>
            {todos.map((todo) => (
              <ListItem>
                <CheckboxWrapper onClick={() => handleCheck(todo.id)}>
                  <input type="checkbox" />
                  <span>{todo.label}</span>
                </CheckboxWrapper>
              </ListItem>
            ))}
          </TodoListWrapper>
          <AddTodo />
        </Provider>
      </>
    );
  }
};

export default TodoList;

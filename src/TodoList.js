import React, { useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import store from "./configureStore";
const TodoListWrapper = styled.ul`
  font-size: 1.25em;
  padding: 0;
`;

const ListItem = styled.li`
  list-style: none;
`;

const AddTodo = () => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState('');
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
    return dispatch({
      type: "DELETE_TODO",
      payload: {
        id,
      },
    });
  };

  return (
    <>
    {todos && todos.length > 0 && (
      <TodoListWrapper>
          {todos.map((todo) => (
            <ListItem key={todo.id}>
              <CheckboxWrapper onClick={() => handleCheck(todo.id)}>
                <input type="checkbox" />
                <span>{todo.label}</span>
              </CheckboxWrapper>
            </ListItem>
          ))}
        </TodoListWrapper>
    )}
    {(!todos || !todos.length) && (<p>No Items Remaining</p>)}
    <AddTodo />
    </>
  )
};

export default TodoList;

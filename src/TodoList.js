import React, { useState } from "react";
import { Provider, useDispatch, useSelector } from 'react-redux'
import styled from "styled-components";
import store from './configureStore'

const TodoListWrapper = styled.ul`
  font-weight: ${(props) => (props.emphasize ? "bold" : "normal")};
  font-size: 1.5rem;
`;

const ListItem = styled.li`
  list-style: none;
`;

const AddTodo = () => {
  const dispatch = useDispatch()
  const [newTodo, setNewTodo] = useState()
  const handleChange = event => {
    setNewTodo(event.target.value)
  }
  const handleClick = () => {
    setNewTodo('')
    return dispatch({
      type: 'ADD_TODO',
      payload: {
        label: newTodo,
        id: Math.ceil(Math.random() * 100)
      }
    })
  }

  return (
    <>
      <input value={newTodo} onChange={handleChange} type="text"/> 
      <button onClick={handleClick}>Add Item</button>
    </>
  )
}

const TodoList = () => {
  const dispatch = useDispatch()
  const todos = useSelector( state => state.todos)
  const CheckboxWrapper = styled.label``;

  const handleCheck = (id) => {
    console.log('triggered')
    return dispatch({
      type: 'DELTE_TODO',
      payload: {
        id
      }
    })
  }

  if (!todos || !todos.length) {
    return (
      <>
        <h1> No Items Remaining</h1>
        <AddTodo />
      </>
    )
  } else {
    return (
      <>
        <Provider store={store}>
          <TodoListWrapper>
            {todos.map(todo => (
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
    )
  }
};

export default TodoList
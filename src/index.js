import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const TodoListWrapper = styled.ul`
  font-weight: ${(props) => (props.emphasize ? "bold" : "normal")};
  font-size: 1.5rem;
`;

const ListItem = styled.li`
  list-style: none;
`;

const CheckboxWrapper = styled.label``;

const MyApplication = () => (
  <>
    <TodoListWrapper>
      <ListItem>
        <CheckboxWrapper>
          <input type="checkbox" />
          <span>Task 1</span>
        </CheckboxWrapper>
      </ListItem>
      <ListItem>
        <CheckboxWrapper>
          <input type="checkbox" />
          <span>Task 2</span>
        </CheckboxWrapper>
      </ListItem>
      <ListItem>
        <CheckboxWrapper>
          <input type="checkbox" />
          <span>Task 3</span>
        </CheckboxWrapper>
      </ListItem>
      <ListItem>
        <CheckboxWrapper>
          <input type="checkbox" />
          <span>Task 4</span>
        </CheckboxWrapper>
      </ListItem>
    </TodoListWrapper>
  </>
);

ReactDOM.render(<MyApplication />, document.getElementById("root"));

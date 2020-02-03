import React from 'react';
import styled from 'styled-components';

import Todo from './Todo';
import NewTodoBox from './NewTodoBox';
import TodoStatus from './TodoStatus';

const Container = styled.div`
  width: 560px;
`;

const TodoList = props => {
  return (
    <Container>
      <NewTodoBox />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <Todo />
      <TodoStatus />
    </Container>
  );
};

export default TodoList;

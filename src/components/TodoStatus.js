import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #ffffff;
  padding: 8px 16px;
  border: 1px solid #d9d9d9;
  box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
  display: flex;
  align-items: center;
`;

const StateContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TodoStatus = props => {
  return (
    <Container>
      <p>2 remainings</p>
      <StateContainer>
        <p>All</p>
        <p>Active</p>
        <p>Completed</p>
      </StateContainer>
      <p>Clear completed</p>
    </Container>
  );
};

export default TodoStatus;

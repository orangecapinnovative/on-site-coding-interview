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

const CircleButton = styled.div`
  border-radius: 50%;
  width: 20px;
  height: 20px;
  border: 1px solid rgb(0, 166, 90);
  margin-right: 8px;
`;

const Todo = props => {
  return (
    <Container>
      <CircleButton />
      <p>Todo Item</p>
    </Container>
  );
};

export default Todo;

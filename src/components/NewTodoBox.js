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

const Input = styled.input`
  outline: none;
  border: none;
  padding: 8px 16px;
  font-size: 16px;
  width: 100%;
`;

const NewTodoBox = props => {
  return (
    <Container>
      <Input type="text" placeholder="Something on your mind?" />
    </Container>
  );
};

export default NewTodoBox;

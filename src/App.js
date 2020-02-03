import React from 'react';
import styled from 'styled-components';

import TodoList from './components/TodoList';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

function App() {
  return (
    <Container>
      <h1>Todo List Apps</h1>
      <TodoList />
    </Container>
  );
}

export default App;

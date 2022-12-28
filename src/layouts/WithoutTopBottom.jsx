import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
export default function WithoutTopBottom() {
  return (
    <Root>
      <Container>
        <Outlet />
      </Container>
    </Root>
  );
}

const Root = styled.div``;
const Container = styled.div`
  margin: 0 auto;
  height: 100vh;
  @media screen and (max-width: 601px) {
    width: 100%;
  }
`;

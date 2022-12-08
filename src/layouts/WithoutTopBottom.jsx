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
  width: 50%;
  height: 100%;
  @media screen and (max-width: 601px) {
    width: 100%;
  }
`;

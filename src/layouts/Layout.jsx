import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { baseBackground } from '../img';
export default function Layout() {
  return (
    <Root>
      <Container>
        <Outlet />
      </Container>
    </Root>
  );
}

const Root = styled.div`
  width: 100%;
  height: 100%;
  @media screen and (min-width: 801px) {
    width: 40%;
    margin: 0 auto;
  }
`;
const Container = styled.div`
  background-image: url(${baseBackground});
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (min-width: 801px) {
    background-size: cover;
  }
`;

import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
export default function Layout() {
  return (
    <Root>
      <Container>
        <Top />
        <Outlet />
        <Bottom />
      </Container>
    </Root>
  );
}

const Root = styled.div`
  height: 100vh;
`;
const Container = styled.div`
  margin: 0 auto;
  width: 50%;
  height: 100%;
  @media screen and (max-width: 601px) {
    width: 100%;
  }
`;
const Top = styled.div`
  width: 100%;
  background: linear-gradient(#cef1c4, white);
  margin-bottom: 60px;
  height: 15%;
`;

const Bottom = styled.div`
  position: absolute;
  bottom: 0px;
  width: 50%;
  height: 15%;
  background: linear-gradient(white, #cef1c4);
  @media screen and (max-width: 601px) {
    position: fixed;
    width: 100%;
  }
`;

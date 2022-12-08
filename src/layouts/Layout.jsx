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

const Root = styled.div``;
const Container = styled.div`
  margin: 0 auto;
  width: 50%;
  height: 100vh;
  @media screen and (max-width: 601px) {
    width: 100%;
  }
`;

const Top = styled.div`
  width: 100%;
  background: linear-gradient(#cef1c4, white);
  margin-bottom: 60px;
  height: 15%;

  @media screen and (max-width: 601px) {
    margin-bottom: 30px;
  }
`;

const Bottom = styled.div`
  position: absolute;
  bottom: 0px;

  width: 50%;
  height: 15%;
  background: linear-gradient(white, #cef1c4);
  @media screen and (max-width: 601px) {
    position: fixed;
    bottom: 0px;
    width: 100%;
  }
  @media screen and (max-height: 800px) {
    display: none;
  }
`;

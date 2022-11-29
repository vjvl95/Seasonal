import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
export default function Layout() {
  return (
    <>
      <Top />
      <Container>
        <Outlet />
      </Container>
      <Bottom />
    </>
  );
}

const Container = styled.div``;
const Top = styled.div`
  width: 100%;
  height: 100px;
  background: linear-gradient(#93bf85, white);
`;
const Bottom = styled.div`
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 100px;
  background: linear-gradient(white, #93bf85);
`;

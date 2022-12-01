import BlackBox from 'component/common/BlackBox';
import SlotMachineBox from '../component/common/SlotComponent';
import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
export default function SlotMachine() {
  return (
    <>
      <Background>
        <BlackBox>
          가나다라마바사아자차카다 님의 <br />
          새해 첫 곡을 찾아줄 럭키 슬롯
        </BlackBox>
        <SlotMachineBox></SlotMachineBox>
        <div style={{ textAlign: 'center' }}>
          <NavLink to='/slotMachine'></NavLink>
        </div>
      </Background>
    </>
  );
}

const Background = styled.div`
  margin-top: 30px;
  width: 100%;
`;

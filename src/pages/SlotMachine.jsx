import BlackBox from 'component/common/BlackBox';
import { useState } from 'react';
import lever from '../img/lever.png';
import resultPrint from '../img/resultPrint.png';
import SlotMachineBox from '../component/common/SlotComponent';
import styled, { keyframes, css } from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom';
import findIndex from 'util/findIndex';
import { slot } from 'component/common/const';
export default function SlotMachine() {
  const [isClick, setIsClick] = useState(false);
  const location = useLocation();
  const { state } = location;
  console.log(state);
  const slotIndex = isClick ? findIndex(state.category) : '';

  return (
    <>
      <Background>
        <SlotBox>
          <BlackBox>
            가나다라마바사아자차카다 님의 <br />
            새해 첫 곡을 찾아줄 럭키 슬롯
          </BlackBox>
          <SlotMachineBox
            isClick={isClick}
            setIsClick={setIsClick}
            selectCategory={state.category}
            slotIndex={slotIndex}
          />
        </SlotBox>
        <ButtonBox>
          <Lever isClicked={isClick} onClick={() => setIsClick(!isClick)} src={lever}></Lever>
          {isClick && (
            <>
              <img src={resultPrint} width={'250px'} alt='' />
              <NavLink
                to={`/result/${slot[slotIndex[3]][4]}`}
                state={{ slot: slot[slotIndex[3]], name: state.name }}
              >
                <StartButton>확인해보기!</StartButton>
              </NavLink>
            </>
          )}
        </ButtonBox>
      </Background>
    </>
  );
}

const scroll2 = keyframes`
 from{
  transform: translateZ(0);
 }

	to {
		opacity: 0;
    visibility: hidden;
    height:0px;
    transform: translate3d(-500%, 0, 0);
	}
`;
const scroll = keyframes`
 from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`;

const Background = styled.div`
  padding-top: 10%;
  width: 100%;
  box-shadow: 0px -4px 10px rgba(0, 165, 85, 0.1);
  border-radius: 125px 125px 0px 0px;
  @media screen and (max-width: 601px) {
    padding-top: 15%;
  }
`;
const StartButton = styled.button`
  width: 190px;
  height: 64px;
  font-size: 20px;
  display: inline-block;
  background: #00c981;
  border-radius: 100px;
  text-align: center;
  line-height: 55px;
  color: white;
  font-weight: 800;
  border: none;
  @media screen and (min-width: 601px) {
    margin-top: 15px;
  }
  ${(props) =>
    props.isClicked &&
    css`
      animation: ${scroll} 5s;
    `};
`;
const SlotBox = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;
const ButtonBox = styled.div`
  margin-top: 30px;
  background: linear-gradient(#ecfcec, white);
  text-align: center;
  height: 30%;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 300px;
`;
const Lever = styled.img`
  width: 70px;
  height: 150px;
  margin-top: 20px;
  ${(props) =>
    props.isClicked &&
    css`
      animation: ${scroll2} 5s forwards;
    `};
`;
